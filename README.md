### Hexo-book-card

在hexo page内生成读书卡片

#### 使用步骤

- 使用`hexo new page ...`创建一个新的页面

  如果需要使用刀posts中可以自行修改本插件的index.js

- 在`index.md`中以如下格式使用本插件

  {% book_card book_name author_name read_time short_comment pic_path %}

  其中pic_path可以是网络上的图片或与index.md同级别目录下相对路径

#### 举例

(这里images/s5968156.jpg)来自[豆瓣](https://img9.doubanio.com/view/subject/s/public/s5968156.jpg)

```
{% book_card SQL 我写的 2022-2-27 不错的书！ 'images/s5968156.jpg' %} 
```

![example](example.png)

#### 安装

```
npm install git://github.com/Unparalleled-Calvin/hexo-book-card#master
```
