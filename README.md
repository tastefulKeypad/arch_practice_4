# Домашнее задание 04: Проектирование и работа с MongoDB

Цель работы: Получить практические навыки работы с MongoDB, проектирования документной модели данных, выполнения CRUD операция и валидации схем.

Вариант 21: Система управления арендой автомобилей https://www.hertz.com/

БД содержит следующие схемы:
- Пользователь
- Автомобиль
- Аренда

/// ПЕРЕПИШИ!
Реализованы SQL запросы для операций:
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
///

## Структура проекта
```
arch_practice_4
├── api
│   ├── db - Содержит модели объектов для БД
│   ├── endpoints - Содержит endpoint'ы API
│   └── schemas - Содержит схемы объектов для валидации pydantic
└── mdb - Содержит файлы MongoDB

```

# Запуск проекта
```
git clone https://github.com/tastefulKeypad/arch_practice_4.git
cd arch_practice_4
docker-compose up -d --build
```
# Полная очистка проекта
```
docker-compose down -v
docker rmi arch_practice_4_db_image:latest 
docker rmi arch_practice_4_api_image:latest
```


//// ПЕРЕПИШИ
## Примеры использования
При запущенном контейнере можно подключиться напрямую к БД:
```
docker exec -it arch_practice_4_db_container psql -U postgres -d psql_db
```

Пример вывода SQL запроса:
```
psql_db=# SELECT * FROM cars;
 id | carclass | price | capacity |  name   
----+----------+-------+----------+---------
  1 |        1 |  1500 |        2 | Bugatti
  2 |        2 |   800 |        4 | Maybach
  3 |        3 |   480 |        2 | Porsche
  4 |        4 |   350 |        4 | Lexus
  5 |        4 |   300 |        4 | Tesla
  6 |        4 |   285 |        4 | Jaguar
  7 |        5 |   200 |        4 | Ford
  8 |        5 |   185 |        4 | Honda
  9 |        6 |   100 |        4 | Skoda
 10 |        6 |    90 |        4 | Hyundai
(10 rows)
```

Помимо этого на ```localhost:8000/docs``` будет доступна интерактивная OPENAPI документация API.
Чтобы зайти под администратором:
username: admin@example.com 
password: admin

Чтобы зайти под пользователем:
username: user1@example.com
password: user
/// ПЕРЕПИШИ

