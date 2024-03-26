---
outline: deep
---
# Работа с контентом

Перед публикацией контента следует проверить текст на наличие грамотических, пунктационных ошибок.

## Детальное описание

Поле Детальное отвечат за отображение содержимого на детальной странице элемента.

### Текст

Разметка текста в поле детальное описание осуществляется с использованием параграфов в режиме HTML ***`<p> </p>`***. Важный текст можно выделить заключив его в элемент 
***`<strong> </strong>`***.

**Пример**

```html
<p>
    Dictum magnis <strong>risus phasellus</strong> vitae quam morbi. 
    Quis lorem lorem arcu, metus, egestas netus cursus.
</p>
<ul role="list">
    <li>Quis elit egestas venenatis mattis dignissim.</li>
    <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
    <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
</ul>
<p>
    Tincidunt integer <strong>commodo</strong>, cursus etiam aliquam neque, et. 
    Consectetur pretium in volutpat, diam. Montes, magna 
    cursus nulla feugiat dignissim id lobortis amet. Laoreet 
    sem est phasellus eu proin massa, lectus. Diam rutrum posuere 
    donec ultricies non morbi. Mi a platea auctor mi.
</p>
```
### Изображения

Значение атрибута класс class="*w-full rounded-lg*" растянет изображение на всю ширину и скруглит углы.

**Пример**

```html
<img src="/upload/iblock/a6553e72.jpg" 
    class="w-full rounded-lg" 
    alt="Спящий медведь">
```

::: info Важно
В атрибуте src не используте абсолютный путь https://site.name/uploads/image.jpg, при смене доменного имени сайта изображения перестанут загружатся. Всегда используйте относительный путь  /uploads/.../image.jpg
:::

### Ссылки

Находящаяся ссылка в детальном описание отображается насайте выделенной контрастным цветом и имеет подчеркивание. Внешние ссылки следуюет снабжать атрибутом rel="nofolow", чтобы не передавать вес страницы.

**Пример**

```html
<a href="/contacts/" rel="nofollow">Контакты</a>
```
