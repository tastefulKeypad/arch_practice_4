# Домашнее задание 04: Проектирование и работа с MongoDB

Цель работы: Получить практические навыки работы с MongoDB, проектирования документной модели данных, выполнения CRUD операций и валидации схем.

Вариант 21: Система управления арендой автомобилей https://www.hertz.com/

Были выделены следующие сущности:
| Сущность     | Коллекция | Описание                     |
|--------------|-----------|------------------------------|
| Автомобиль   | cars      | Автомобили из автопарка      |
| Пользователь | users     | Зарегистрированные клиенты   |
| Аренда       | rents     | Записи об аренде автомобилей |

Реализованы запросы для операций:
- [x] Создание нового пользователя
- [x] Поиск пользователя по логину
- [x] Поиск пользователя по маске имя и фамилии
- [x] Добавление автомобиля в парк
- [x] Получение списка доступных автомобилей
- [x] Поиск автомобилей по классу
- [x] Создание аренды
- [x] Получение активных аренд пользователя
- [x] Завершение аренды
- [x] Получение истории аренд

## Структура проекта
```
arch_practice_4
└── mdb - Содержит файлы MongoDB

```

# Запуск проекта
``` bash
git clone https://github.com/tastefulKeypad/arch_practice_4.git
cd arch_practice_4
docker-compose up -d --build
```
# Полная очистка проекта
``` bash
docker-compose down -v
docker rmi arch_practice_4_db_image:latest 
```


## Примеры использования
При запущенном контейнере можно подключиться напрямую к БД:
``` bash
docker exec -it arch_practice_4_db_container mongosh
``` 
Пример вывода коллекции автомобилей `cars` после переключения на основную БД `servicebd`:
```
test> use servicedb
switched to db servicedb
servicedb> db.cars.find()
[
  {
    _id: ObjectId('69e8e16cde146425f144ba89'),
    carClass: 1,
    price: 1500,
    capacity: 2,
    name: 'Bugatti'
  },
  {
    _id: ObjectId('69e8e16cde146425f144ba8a'),
    carClass: 2,
    price: 800,
    capacity: 4,
    name: 'Maybach'
  },
  {
    _id: ObjectId('69e8e16cde146425f144ba8b'),
    carClass: 3,
    price: 480,
    capacity: 2,
    name: 'Porsche'
  },
  {
    _id: ObjectId('69e8e16cde146425f144ba8c'),
    carClass: 4,
    price: 350,
    capacity: 4,
    name: 'Lexus'
  },
  {
    _id: ObjectId('69e8e16cde146425f144ba8d'),
    carClass: 4,
    price: 300,
    capacity: 4,
    name: 'Tesla'
  },
  {
    _id: ObjectId('69e8e16cde146425f144ba8e'),
    carClass: 4,
    price: 285,
    capacity: 4,
    name: 'Jaguar'
  },
  {
    _id: ObjectId('69e8e16cde146425f144ba8f'),
    carClass: 5,
    price: 200,
    capacity: 4,
    name: 'Ford'
  },
  {
    _id: ObjectId('69e8e16cde146425f144ba90'),
    carClass: 5,
    price: 185,
    capacity: 4,
    name: 'Honda'
  },
  {
    _id: ObjectId('69e8e16cde146425f144ba91'),
    carClass: 6,
    price: 100,
    capacity: 4,
    name: 'Skoda'
  },
  {
    _id: ObjectId('69e8e16cde146425f144ba92'),
    carClass: 6,
    price: 90,
    capacity: 4,
    name: 'Hyundai'
  }
]
```
