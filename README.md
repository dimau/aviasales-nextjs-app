# Календарь низких цен

Приложение построено на стеке Next.js + React + Redux + SWR и предназначено для поиска авиабилетов по заданному маршруту с минимальной ценой - по дням выбранного месяца

## Запуск на dev машине

1. Копируем репозиторий и ставим все зависимости
```bash
git clone git@github.com:dimau/aviasales-nextjs-app.git
cd aviasales-nextjs-app
npm install
```

2. Создаем файл для хранения переменных окружения
```bash
touch .env.local
```

3. Открываем файл и записываем в него API ключ для Aviasales
```bash
AVIASALES_API_KEY=...
```

4. Запускаем приложение
```bash
npm run dev
```

5. Открываем в браузере приложение [http://localhost:3000](http://localhost:3000)

## Сборка и запуск в продакшене

1. Подгтовка продакшен сборки приложения
```bash
npm run build
```

2. Пушим в git репозиторий и публикуем на Vercel