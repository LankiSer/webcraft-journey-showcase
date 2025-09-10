export const courseData = {
  htmlBasics: {
    lessons: [
      {
        number: 1,
        title: "Знакомство с Web",
        description: "Введение в веб-разработку, первые шаги с HTML в Visual Studio Code",
        skills: ["HTML основы", "VS Code", "Веб-технологии"],
        difficulty: "Начальный" as const
      },
      {
        number: 2,
        title: "HTML теги и структура",
        description: "Изучение различных HTML тегов, их назначение и правильное использование",
        skills: ["HTML теги", "Семантика", "Структура документа"],
        difficulty: "Начальный" as const
      },
      {
        number: 3,
        title: "История и основы CSS",
        description: "Знакомство с каскадными таблицами стилей, история развития CSS",
        skills: ["CSS основы", "Селекторы", "Свойства"],
        difficulty: "Начальный" as const
      }
    ]
  },
  
  cssStyling: {
    lessons: [
      {
        number: 4,
        title: "Применение CSS стилей",
        description: "Практическое применение CSS стилей к готовому HTML шаблону",
        skills: ["CSS стили", "Селекторы", "Практика"],
        difficulty: "Начальный" as const
      },
      {
        number: 5,
        title: "Верстка Header + Banner + Footer",
        description: "Создание основных блоков сайта: шапка, баннер и подвал",
        skills: ["Flexbox", "Layout", "Компоненты"],
        difficulty: "Средний" as const
      },
      {
        number: 6,
        title: "Продолжение верстки",
        description: "Завершение верстки основных разделов сайта",
        skills: ["Grid", "Responsive", "CSS практика"],
        difficulty: "Средний" as const
      },
      {
        number: 7,
        title: "Знакомство с Figma",
        description: "Изучение инструмента дизайна Figma, начало создания собственного лендинга",
        skills: ["Figma", "UI/UX", "Дизайн"],
        difficulty: "Начальный" as const
      },
      {
        number: 8,
        title: "Создание дизайна страницы",
        description: "Совместная работа над дизайном собственного лендинга в Figma",
        skills: ["Дизайн-система", "Макетирование", "Figma"],
        difficulty: "Средний" as const
      },
      {
        number: 9,
        title: "Завершение дизайна и аудит",
        description: "Финализация дизайна и проведение аудита каждой страницы",
        skills: ["Аудит дизайна", "UX анализ", "Финализация"],
        difficulty: "Средний" as const
      }
    ]
  },

  layoutAndFigma: {
    lessons: [
      {
        number: 10,
        title: "Верстка по макету Figma",
        description: "Изучение верстки по дизайн-макету с использованием плагина Inspect Styles",
        skills: ["Figma to Code", "Pixel Perfect", "Инспектор"],
        difficulty: "Средний" as const
      },
      {
        number: 11,
        title: "Верстка собственного лендинга",
        description: "Продолжение верстки личного лендинга по созданному дизайну",
        skills: ["Верстка", "CSS Grid", "Flexbox"],
        difficulty: "Средний" as const
      },
      {
        number: 12,
        title: "Завершение верстки и Git",
        description: "Финализация верстки и первое знакомство с системой контроля версий Git",
        skills: ["Git основы", "Версионирование", "Завершение проекта"],
        difficulty: "Средний" as const
      }
    ]
  },

  gitDeployment: {
    lessons: [
      {
        number: 13,
        title: "Git и GitHub Pages",
        description: "Углубленное изучение Git, загрузка проектов и подключение GitHub Pages",
        skills: ["Git", "GitHub", "Деплой", "Хостинг"],
        difficulty: "Средний" as const
      }
    ]
  },

  javascript: {
    lessons: [
      {
        number: 14,
        title: "Знакомство с JavaScript",
        description: "Основы JavaScript, первые скрипты и базовая практика",
        skills: ["JS основы", "Переменные", "Функции"],
        difficulty: "Начальный" as const
      },
      {
        number: 15,
        title: "Анимации с JavaScript",
        description: "Оживление сайта с помощью JS: анимации при клике и интерактивность",
        skills: ["DOM", "События", "Анимации"],
        difficulty: "Средний" as const
      },
      {
        number: 16,
        title: "Работа со Swiper.js",
        description: "Создание слайдеров с помощью библиотеки Swiper.js, различные варианты настройки",
        skills: ["Swiper.js", "Слайдеры", "Библиотеки"],
        difficulty: "Средний" as const
      }
    ]
  },

  advanced: {
    lessons: [
      {
        number: 17,
        title: "Архитектура сайтов",
        description: "Изучение правильной архитектуры сайтов, планирование многостраничного проекта",
        skills: ["Архитектура", "Планирование", "UX"],
        difficulty: "Продвинутый" as const
      },
      {
        number: 18,
        title: "Дизайн по прототипу",
        description: "Создание дизайна в Figma на основе проработанного прототипа",
        skills: ["Прототипирование", "Figma", "Дизайн-система"],
        difficulty: "Продвинутый" as const
      },
      {
        number: 19,
        title: "Продолжение дизайна",
        description: "Развитие дизайн-системы и создание всех страниц проекта",
        skills: ["Дизайн-система", "Многостраничность", "Консистентность"],
        difficulty: "Продвинутый" as const
      },
      {
        number: 26,
        title: "Кроссбраузерность и БЭМ",
        description: "Адаптация под разные браузеры и устройства, методология БЭМ",
        skills: ["БЭМ", "Кроссбраузерность", "Адаптивность"],
        difficulty: "Продвинутый" as const
      },
      {
        number: 27,
        title: "Библиотеки AOS и Lenis",
        description: "Изучение и применение библиотек анимации AOS и плавной прокрутки Lenis",
        skills: ["AOS", "Lenis", "Анимации", "UX"],
        difficulty: "Продвинутый" as const
      },
      {
        number: 28,
        title: "Продвинутые анимации",
        description: "Применение различных анимаций в проекте с использованием изученных библиотек",
        skills: ["Сложные анимации", "Performance", "Оптимизация"],
        difficulty: "Продвинутый" as const
      },
      {
        number: 29,
        title: "AJAX и JSON",
        description: "Работа с AJAX запросами и обработка JSON файлов в JavaScript",
        skills: ["AJAX", "JSON", "API", "Асинхронность"],
        difficulty: "Продвинутый" as const
      },
      {
        number: 30,
        title: "LocalStorage",
        description: "Изучение LocalStorage, сохранение данных в браузере пользователя",
        skills: ["LocalStorage", "Хранение данных", "Persistence"],
        difficulty: "Продвинутый" as const
      },
      {
        number: 35,
        title: "Система авторизации",
        description: "Создание формы авторизации с проверкой через JSON и LocalStorage, Dashboard",
        skills: ["Авторизация", "Безопасность", "SPA", "Роутинг"],
        difficulty: "Продвинутый" as const
      }
    ]
  }
};