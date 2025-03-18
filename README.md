# Todo List

## Ветка main
* содержание одного дела — небольшой текст
* используется JSON Placeholder с ручкой (endpoint) «todos»
* реализован только вывод списка

## Ветка json-server
* реализована возможность добавлять, изменять и удалять дела
* реализован поиск дел по заданной фразе (для нахождения элемента в тексте дела должен быть совпадающий с введенной фразой фрагмент);
* реализована кнопка для включения режима сортировки дел по алфавиту

## Ветка firebase
* приложение из второго пункта, но с использованием Firebase (без использования JSON Server)

## Ветка routes
* Используется React Router
* "/" — Главная страница с самим списком дел (задач)
* при попытке перейти по любому некорректному адресу отображаеться страница с ошибкой 404 и адресом "/404"
* перенесена возможность редактирования и удаления задачи на страницу задачи с главной страницы

## Ветка react-context
* используется React Context
* без useReducer() и flux-подхода
