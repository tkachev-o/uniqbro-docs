---
outline: deep
---
# Ресайз

## Пакетное изменение размеров фотографий в Photoshop

Перед публикацией фото на сайте следует изменить их размер до оптимальных.

Пресет операций для импорта в Photoshop [Скачать с Google Drive](https://drive.google.com/file/d/1LQqhApa6hjyaq73GYHFQWzgTy2anwIks/view?usp=sharing)

Для импорта откройте окно операций комбинацией клавиш Alt + F9. Затем в правом верхнем углу через кнопку вызова контекстного меню выберите Загрузить операции... и следуйте инструкциям.
В итоге у вас в списке операций должна появиться папка Resize. В данной паке три операции Tall, Wide и Cond. Последняя определяет ориентацию изображения и применяет соответствующую операцию.

## Пример пакетной обработки

В нашем примере изображения уменьшаться в размере до 1920 пикс по высоте или длине в зависимости от ориентации. Для начала у нас должно быть две папки.

В папке Src будут хранится исходные изображения, в папке Dst изображения после обработки.

Для запуска операций изменения размера откроем Обработчик изображений. Файл –> Сценарии –> ...

### Сценарий Обработчик изображений

1. Выбираем нашу папку с изображениями

    - Флаг `Включая все подпапки` – можно установить.

2. Выбираем место для сохранения - вторую папку.

    - Флаг `Сохранить структуру папок` – если требуется.

3. Тип файла отмечаем Сохранить как JPEG, качество 10.

    - Флаг `Преобразовать профиль в sRGB` – установим.

Остальное не трогаем.

4. Выполнить операцию - Выбираем Resize и далее Cond.

    - Флаг `Включить ICC-профиль` – не устанавливаем.

Жмем кнопку Выполнить. После завершения во второй папке у вас должны появиться обработанные изображения.