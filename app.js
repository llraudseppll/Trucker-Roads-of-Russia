const { useState, useEffect } = React;

const translations = {
  ru: {
    title1: 'Дальнобой:',
    title2: 'Дороги России',
    welcome: 'Привет, {name}!',
    chooseRoute: 'Выбери маршрут из {city}',
    route: 'Маршрут: {from} → {to} ({distance} км)',
    tapToDrive: 'Тапай, чтобы ехать! (-1 TRC)',
    noCoins: 'Нет TRC! Ожидай {seconds} сек.',
    reached: 'Доехал до {city}! +{reward} TRC',
    chooseLanguage: 'Выбери язык',
    russian: 'Русский',
    english: 'Английский',
    truckcoin: 'TRC',
    progress: 'Прогресс',
    cities: {
      'Москва': 'Москва',
      'Санкт-Петербург': 'Санкт-Петербург',
      'Нижний Новгород': 'Нижний Новгород',
      'Казань': 'Казань',
      'Ростов-на-Дону': 'Ростов-на-Дону',
      'Екатеринбург': 'Екатеринбург',
      'Самара': 'Самара',
      'Уфа': 'Уфа',
      'Челябинск': 'Челябинск',
      'Омск': 'Омск',
      'Новосибирск': 'Новосибирск',
      'Волгоград': 'Волгоград',
      'Красноярск': 'Красноярск',
      'Пермь': 'Пермь',
      'Воронеж': 'Воронеж',
      'Саратов': 'Саратов',
      'Краснодар': 'Краснодар',
      'Тольятти': 'Тольятти',
      'Ижевск': 'Ижевск',
      'Барнаул': 'Барнаул',
      'Тюмень': 'Тюмень',
    },
  },
  en: {
    title1: 'Trucker:',
    title2: 'Roads of Russia',
    welcome: 'Hello, {name}!',
    chooseRoute: 'Choose a route from {city}',
    route: 'Route: {from} → {to} ({distance} km)',
    tapToDrive: 'Tap to drive! (-1 TRC)',
    noCoins: 'No TRC! Wait {seconds} sec.',
    reached: 'Reached {city}! +{reward} TRC',
    chooseLanguage: 'Choose Language',
    russian: 'Russian',
    english: 'English',
    truckcoin: 'TRC',
    progress: 'Progress',
    cities: {
      'Москва': 'Moscow',
      'Санкт-Петербург': 'Saint Petersburg',
      'Нижний Новгород': 'Nizhny Novgorod',
      'Казань': 'Kazan',
      'Ростов-на-Дону': 'Rostov-on-Don',
      'Екатеринбург': 'Yekaterinburg',
      'Самара': 'Samara',
      'Уфа': 'Ufa',
      'Челябинск': 'Chelyabinsk',
      'Омск': 'Omsk',
      'Новосибирск': 'Novosibirsk',
      'Волгоград': 'Volgograd',
      'Красноярск': 'Krasnoyarsk',
      'Пермь': 'Perm',
      'Воронеж': 'Voronezh',
      'Саратов': 'Saratov',
      'Краснодар': 'Krasnodar',
      'Тольятти': 'Tolyatti',
      'Ижевск': 'Izhevsk',
      'Барнаул': 'Barnaul',
      'Тюмень': 'Tyumen',
    },
  },
};

const routes = {
  'Москва': [
    { city: 'Санкт-Петербург', distance: 700 },
    { city: 'Нижний Новгород', distance: 400 },
    { city: 'Казань', distance: 800 },
    { city: 'Ростов-на-Дону', distance: 1000 },
    { city: 'Екатеринбург', distance: 1800 },
    { city: 'Волгоград', distance: 970 },
    { city: 'Воронеж', distance: 520 },
    { city: 'Саратов', distance: 850 },
    { city: 'Краснодар', distance: 1300 },
  ],
  'Санкт-Петербург': [
    { city: 'Москва', distance: 700 },
    { city: 'Нижний Новгород', distance: 900 },
  ],
  'Нижний Новгород': [
    { city: 'Москва', distance: 400 },
    { city: 'Казань', distance: 400 },
    { city: 'Ижевск', distance: 600 },
  ],
  'Казань': [
    { city: 'Москва', distance: 800 },
    { city: 'Нижний Новгород', distance: 400 },
    { city: 'Самара', distance: 400 },
    { city: 'Уфа', distance: 500 },
    { city: 'Ижевск', distance: 300 },
  ],
  'Ростов-на-Дону': [
    { city: 'Москва', distance: 1000 },
    { city: 'Волгоград', distance: 470 },
    { city: 'Краснодар', distance: 250 },
  ],
  'Екатеринбург': [
    { city: 'Москва', distance: 1800 },
    { city: 'Челябинск', distance: 200 },
    { city: 'Уфа', distance: 500 },
    { city: 'Омск', distance: 900 },
    { city: 'Пермь', distance: 350 },
    { city: 'Тюмень', distance: 300 },
  ],
  'Самара': [
    { city: 'Москва', distance: 1000 },
    { city: 'Казань', distance: 400 },
    { city: 'Уфа', distance: 400 },
    { city: 'Тольятти', distance: 80 },
    { city: 'Саратов', distance: 400 },
  ],
  'Уфа': [
    { city: 'Москва', distance: 1300 },
    { city: 'Казань', distance: 500 },
    { city: 'Самара', distance: 400 },
    { city: 'Екатеринбург', distance: 500 },
    { city: 'Челябинск', distance: 400 },
  ],
  'Челябинск': [
    { city: 'Москва', distance: 1700 },
    { city: 'Екатеринбург', distance: 200 },
    { city: 'Уфа', distance: 400 },
    { city: 'Омск', distance: 800 },
    { city: 'Тюмень', distance: 400 },
  ],
  'Омск': [
    { city: 'Москва', distance: 2700 },
    { city: 'Екатеринбург', distance: 900 },
    { city: 'Челябинск', distance: 800 },
    { city: 'Новосибирск', distance: 600 },
    { city: 'Тюмень', distance: 550 },
    { city: 'Барнаул', distance: 600 },
  ],
  'Новосибирск': [
    { city: 'Москва', distance: 3300 },
    { city: 'Омск', distance: 600 },
    { city: 'Красноярск', distance: 800 },
    { city: 'Барнаул', distance: 200 },
  ],
  'Волгоград': [
    { city: 'Москва', distance: 970 },
    { city: 'Ростов-на-Дону', distance: 470 },
    { city: 'Саратов', distance: 330 },
  ],
  'Красноярск': [
    { city: 'Новосибирск', distance: 800 },
    { city: 'Барнаул', distance: 600 },
  ],
  'Пермь': [
    { city: 'Екатеринбург', distance: 350 },
    { city: 'Ижевск', distance: 300 },
    { city: 'Казань', distance: 500 },
  ],
  'Воронеж': [
    { city: 'Москва', distance: 520 },
    { city: 'Ростов-на-Дону', distance: 560 },
    { city: 'Волгоград', distance: 500 },
  ],
  'Саратов': [
    { city: 'Москва', distance: 850 },
    { city: 'Самара', distance: 400 },
    { city: 'Волгоград', distance: 330 },
  ],
  'Краснодар': [
    { city: 'Москва', distance: 1300 },
    { city: 'Ростов-на-Дону', distance: 250 },
  ],
  'Тольятти': [
    { city: 'Самара', distance: 80 },
    { city: 'Казань', distance: 350 },
    { city: 'Уфа', distance: 400 },
  ],
  'Ижевск': [
    { city: 'Казань', distance: 300 },
    { city: 'Пермь', distance: 300 },
    { city: 'Нижний Новгород', distance: 600 },
  ],
  'Барнаул': [
    { city: 'Новосибирск', distance: 200 },
    { city: 'Омск', distance: 600 },
    { city: 'Красноярск', distance: 600 },
  ],
  'Тюмень': [
    { city: 'Екатеринбург', distance: 300 },
    { city: 'Челябинск', distance: 400 },
    { city: 'Омск', distance: 550 },
  ],
};

function App() {
  const [user, setUser] = useState(null);
  const [truckCoin, setTruckCoin] = useState(parseFloat(localStorage.getItem('truckCoin') || '100'));
  const [missionProgress, setMissionProgress] = useState(parseInt(localStorage.getItem('progressKm') || '0'));
  const [currentCity, setCurrentCity] = useState(localStorage.getItem('currentCity') || 'Москва');
  const [destination, setDestination] = useState(localStorage.getItem('destination') || null);
  const [distance, setDistance] = useState(parseInt(localStorage.getItem('distance') || '0'));
  const [language, setLanguage] = useState(localStorage.getItem('language') || null);
  const [waitTime, setWaitTime] = useState(parseInt(localStorage.getItem('waitTime') || '30'));
  const [waitCount, setWaitCount] = useState(parseInt(localStorage.getItem('waitCount') || '0'));
  const [isWaiting, setIsWaiting] = useState(false);
  const [waitStart, setWaitStart] = useState(null);
  const t = translations[language || 'ru'];

  useEffect(() => {
    console.log('Инициализация приложения...');
    if (!window.Telegram?.WebApp) {
      console.error('Telegram WebApp не загружен');
      return;
    }
    console.log('Telegram WebApp загружен');
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    const tgUser = tg.initDataUnsafe.user || { username: 'Guest' };
    console.log('Пользователь:', tgUser);
    setUser(tgUser);
    if (!localStorage.getItem('truckCoin')) {
      console.log('Инициализация нового пользователя: 100 TRC, Москва');
      setTruckCoin(100);
      setCurrentCity('Москва');
      setMissionProgress(0);
      setDistance(0);
      setDestination(null);
      setWaitTime(30);
      setWaitCount(0);
    }
    if (isWaiting) {
      console.log('Проверка ожидания...');
      checkWaiting();
    }
  }, [language, isWaiting]);

  useEffect(() => {
    console.log('Сохранение состояния:', { language, truckCoin, missionProgress, currentCity, destination, distance, waitTime, waitCount });
    localStorage.setItem('language', language);
    localStorage.setItem('truckCoin', truckCoin);
    localStorage.setItem('progressKm', missionProgress);
    localStorage.setItem('currentCity', currentCity);
    localStorage.setItem('destination', destination || '');
    localStorage.setItem('distance', distance);
    localStorage.setItem('waitTime', waitTime);
    localStorage.setItem('waitCount', waitCount);
  }, [language, truckCoin, missionProgress, currentCity, destination, distance, waitTime, waitCount]);

  const selectLanguage = (lang) => {
    console.log('Выбор языка:', lang);
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const selectRoute = (city, dist) => {
    console.log('Выбор маршрута:', city, dist);
    setDestination(city);
    setDistance(dist);
    setMissionProgress(0);
  };

  const handleTap = () => {
    console.log('Тап, TRC:', truckCoin, 'Прогресс:', missionProgress);
    if (truckCoin < 1) {
      console.log('Недостаточно TRC, запуск ожидания');
      alert(t.noCoins.replace('{seconds}', waitTime));
      startWaiting();
      return;
    }
    setTruckCoin(prev => prev - 1);
    setMissionProgress(prev => {
      const newProgress = prev + 10;
      if (newProgress >= distance) {
        console.log('Маршрут завершён, награда:', distance);
        setTruckCoin(prevCoin => prevCoin + distance);
        setCurrentCity(destination);
        setDestination(null);
        setMissionProgress(0);
        setDistance(0);
        alert(t.reached.replace('{city}', t.cities[destination]).replace('{reward}', distance));
        return 0;
      }
      return newProgress;
    });
  };

  const startWaiting = () => {
    if (isWaiting) {
      console.log('Ожидание уже активно');
      return;
    }
    console.log('Начало ожидания:', waitTime, 'сек');
    setIsWaiting(true);
    setWaitStart(Date.now());
    setTimeout(() => {
      console.log('Ожидание завершено, +10 TRC');
      setTruckCoin(prev => prev + 10);
      setIsWaiting(false);
      setWaitCount(prev => prev + 1);
      setWaitTime(prev => prev === 30 ? 60 : prev * 2);
    }, waitTime * 1000);
  };

  const checkWaiting = () => {
    if (isWaiting && waitStart) {
      const timeLeft = waitStart + waitTime * 1000 - Date.now();
      console.log('Ожидание, осталось:', timeLeft / 1000, 'сек');
      if (timeLeft <= 0) {
        console.log('Ожидание завершено, +10 TRC');
        setTruckCoin(prev => prev + 10);
        setIsWaiting(false);
        setWaitCount(prev => prev + 1);
        setWaitTime(prev => prev === 30 ? 60 : prev * 2);
      } else {
        setTimeout(checkWaiting, 1000);
      }
    }
  };

  if (!language) {
    console.log('Рендеринг экрана выбора языка');
    return (
      <div className="min-h-screen bg-white rounded-lg flex flex-col items-center justify-center p-4 shadow-lg">
        <h1 className="flex flex-col items-center text-center mb-6">
          <span className="text-3xl font-bold">{translations.ru.title1}</span>
          <span className="text-2xl font-bold">{translations.ru.title2}</span>
        </h1>
        <p className="text-lg mb-4">{translations.ru.chooseLanguage}</p>
        <div className="flex flex-col space-y-2 w-full max-w-xs">
          <button
            onClick={() => selectLanguage('ru')}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
          >
            {translations.ru.russian}
          </button>
          <button
            onClick={() => selectLanguage('en')}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
          >
            {translations.en.english}
          </button>
        </div>
      </div>
    );
  }

  console.log('Рендеринг основного экрана, пользователь:', user?.username, 'TRC:', truckCoin);
  return (
    <div className="min-h-screen bg-white rounded-lg flex flex-col items-center p-4 shadow-lg">
      <h1 className="flex flex-col items-center text-center mb-4">
        <span className="text-3xl font-bold">{t.title1}</span>
        <span className="text-2xl font-bold">{t.title2}</span>
      </h1>
      <div className="flex justify-between items-center w-full mb-4 bg-gray-100 p-3 rounded">
        <span className="font-semibold">{user?.username || 'Guest'}</span>
        <span>{t.truckcoin}: {truckCoin.toFixed(0)}</span>
        <span>{t.progress}: {missionProgress}/{distance} {t.km}</span>
      </div>
      {destination ? (
        <div className="w-full bg-white rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2 text-center">
            {t.route
              .replace('{from}', t.cities[currentCity])
              .replace('{to}', t.cities[destination])
              .replace('{distance}', distance)}
          </h2>
          <div className="relative h-3 mb-4">
            <svg
              className="absolute top-0 left-0 w-20 h-10 transition-transform duration-300"
              style={{ transform: `translateX(calc(${(missionProgress / distance) * 100}% - 20px)) scaleX(-1)` }}
              viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="5" width="50" height="20" fill="black" rx="5"/>
              <rect x="0" y="-5" width="20" height="30" fill="#FF4040" rx="5"/>
              <circle cx="5" cy="25" r="5" fill="#333"/>
              <circle cx="15" cy="25" r="5" fill="#333"/>
              <circle cx="25" cy="25" r="5" fill="#333"/>
              <circle cx="35" cy="25" r="5" fill="#333"/>
              <circle cx="45" cy="25" r="5" fill="#333"/>
              <rect x="20" y="5" width="10" height="10" fill="#333"/>
            </svg>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${(missionProgress / distance) * 100}%` }}
            ></div>
          </div>
          <button
            onClick={handleTap}
            className="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 text-xl font-bold animate-pulse"
            disabled={truckCoin < 1 && isWaiting}
          >
            {truckCoin < 1 && isWaiting
              ? t.noCoins.replace('{seconds}', Math.ceil((waitStart + waitTime * 1000 - Date.now()) / 1000))
              : t.tapToDrive}
          </button>
        </div>
      ) : (
        <div className="w-full bg-white rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2 text-center">
            {t.chooseRoute.replace('{city}', t.cities[currentCity])}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {routes[currentCity]?.map(route => (
              <button
                key={route.city}
                onClick={() => selectRoute(route.city, route.distance)}
                className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                {t.cities[route.city]} ({route.distance} {t.km})
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setLanguage(null)}
        className="mt-4 text-blue-500 hover:underline"
      >
        {t.chooseLanguage}
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
