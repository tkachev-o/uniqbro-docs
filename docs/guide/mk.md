---
outline: deep
---
# Работа с контентом

Перед публикацией контента следует проверить текст на наличие грамотических, пунктационных ошибок.

## Пример форматирования описания

Пример форматирования параграфов с жирным начертанимем и маркеровочного списка.

**Ввод**

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

**Вывод**


Dictum magnis **risus phasellus** vitae quam morbi. 
    Quis lorem lorem arcu, metus, egestas netus cursus.
* Quis elit egestas venenatis mattis dignissim.
* Cras cras lobortis vitae vivamus ultricies facilisis tempus.
* Orci in sit morbi dignissim metus diam arcu pretium.

Tincidunt integer **commodo**, cursus etiam aliquam neque, et. 
    Consectetur pretium in volutpat, diam. Montes, magna 
    cursus nulla feugiat dignissim id lobortis amet. Laoreet 
    sem est phasellus eu proin massa, lectus. Diam rutrum posuere 
    donec ultricies non morbi. Mi a platea auctor mi.

## Изображение

**Ввод**

```html
<img src="/upload/iblock/a6553e72.jpg" 
    class="w-full rounded-lg" 
    alt="Спящий медведь">
```
Значение атрибута класс class="*w-full rounded-lg*" растянет изображение на всю ширину и скруглит углы.

**Вывод**
![image](https://www.nhm.ac.uk/resources/visit/wpy/2023/peoples-choice/large/webp/886157a5-9b32-41fb-bea2-c5686f31ebc9.webp)
