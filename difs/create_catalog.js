db.getCollection('catalogs')
.drop();
db.getCollection('catalogs')
.insertMany([
  { _id: 'home', name: 'Головна', ancestors: [], parent: 'null',
    auth: 'casual', order: 0, assets: ['catalog'],description: ''},
    {_id:'common', name:'Загальні', ancestors:['home'], parent :'home',
      auth: 'casual', order:1, assets:['catalog'], description:''},
  
      { _id: 'products', name: 'Каталог', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 1, assets: ['product'],description: ''},

        { _id: 'residential', name: 'Побутовий лінолеум', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 1, prefix: '', assets: ['catalog_residential'],
          description: {
            "title": "Побутовий лінолеум",
            "p": [
              "Понад 50-річний досвід в галузі виробництва рулонного, вінілового покриття на підлогу, ЗАТ Грабопласт пропонує інноваційні рішення для будь-яких запитів технічного або дизайнерського характеру, що виникають у побутовому та комерційному секторі.",
              "Наша компанія виготовляє вінілові покриття на підлогу в рулонах, що складаються з багатьох шарів. Верхній захисний шар гетерогенного вінілового покриття на підлогу складається з чистого прозорого ПВХ, без додавання наповнювачів, що гарантує максимальну зносостійкість.",
              "Скловолокно між шарами забезпечує відмінну стабільність розмірів. Інші переваги – великий вибір малюнка і легкість в укладці. У побутовому покритті на підлогу поєднуються технічні характеристики та привабливий зовнішній вигляд.",
              "Сертифікація нашої продукції проводиться у відомих в світі незалежних інститутах.",
            ],
          }
        },
          // { _id: 'eco01', name: 'Eco 01', ancestors: ['home', 'common', 'products', 'residential'], parent: 'residential',
          //   auth: 'casual', order: 1, prefix: '', assets: ['catalog'],description: ''
          // },
          // { _id: 'viva', name: 'Viva', ancestors: ['home', 'common', 'products', 'residential'], parent: 'residential',
          //   auth: 'casual', order: 1, prefix: '', assets: ['catalog'],description: ''},

        { _id: 'semi_commercial', name: 'Напівкомерційний лінолеум', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 2, prefix: '', assets: ['catalog_semi_commercial'],
         description: ''},
          // { _id: 'astral_color', name: 'Astral color', ancestors: ['home', 'common', 'products', 'semi_commercial'], parent: 'semi_commercial',
          //   auth: 'casual', order: 2, prefix: '', assets: ['catalog'],description: ''},
          // { _id: 'top', name: 'Top extra', ancestors: ['home', 'common', 'products', 'semi_commercial'], parent: 'semi_commercial',
          //   auth: 'casual', order: 2, prefix: '', assets: ['catalog'],description: ''},
//!!!
        // { _id: 'parquet', name: 'Паркет', ancestors: ['home', 'common', 'products'], parent: 'products',
        //   auth: 'casual', order: 3, prefix: '', assets: ['catalog'],description: ''},

        { _id: 'commercial', name: 'Комерційний лінолеум', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 3, prefix: '', assets: ['catalog_commercial'],
          description: {
            "title": "Комерційний лінолеум",
            "p": [
              "Грабопласт, використовуючи свій понад 50-річний досвід в галузі виробництва вінілового покриття на підлогу, пропонує інноваційні рішення для будь-яких технічних або дизайнерських вимог, що виникають у різних областях.",
              "Наша компанія виготовляє вінілові покриття на підлогу в рулонах, що складаються з багатьох шарів. Вони надають значимі властивості, тим самим підвищують споживчу цінність нашої продукції.",
              "Верхній захисний шар гетерогенного вінілового покриття на підлогу складається з чистого транспарентного ПВХ, без додавання наповнювачів, що гарантує максимальну зносостійкість. Скловолокно між шарами забезпечує відмінну стабільність розмірів. Інші переваги – великий вибір малюнка і легкість в укладці.",
              "Сертифікація нашої продукції проводиться у відомих в світі незалежних інститутах."
            ],
          }
        },
          { _id: 'diamond', name: 'Diamond', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
            auth: 'casual', order: 1, prefix: '', assets: ['catalog_commercial_diamond'],description: ''},
          { _id: 'homogen', name: 'Гомогенні покриття', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
            auth: 'casual', order: 2, prefix: '', assets: ['low_catalog_homogen'],description: ''},
          { _id: 'safety', name: 'Безпечні покриття', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
            auth: 'casual', order: 3, prefix: '', assets: ['low_catalog_safety'],description: ''},
          { _id: 'acoustic', name: 'Акустичні покриття', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
            auth: 'casual', order: 4, prefix: '', assets: ['low_catalog_acoustic'],description: ''},
          { _id: 'silver_knight', name: 'Silver Knight', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
            auth: 'casual', order: 5, prefix: '', assets: ['low_catalog_silver_knight'],description: ''},
          // { _id: 'diamond_st_metal', name: 'Diamond standart metal', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
          //   auth: 'casual', order: 2, prefix: '', assets: ['catalog'],description: ''},
          // { _id: 'diamond_st_tech', name: 'Diamond standart tech', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
          //   auth: 'casual', order: 3, prefix: '', assets: ['catalog'],description: ''},
          // { _id: 'diamond_st_plaza', name: 'Diamond standart plaza', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
          //   auth: 'casual', order: 4, prefix: '', assets: ['catalog'],description: ''},
          // { _id: 'fortis', name: 'Fortis', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
          //   auth: 'casual', order: 5, prefix: '', assets: ['catalog'],description: ''},

        { _id: 'sport', name: 'Спортивні покриття', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 4, prefix: '', assets: ['low_catalog_sport'],
          description: {
            "title": "Спортивний лінолеум",
            "p": [
              "Постійний рух та заняття спортом позитивно впливають на людський організм. Крім того, важливим моментом є місце та поверхня, на якій ми займаємось активною діяльністю.",
              "Спортивне взуття, покриття на підлогу відіграють важливу роль в захисті суглобів колін, щиколоток, спини.",
              "В процесі розробки спортивного покриття ми враховуємо важливість досягнення відмінних спортивних результатів та максимального захисту здоров'я спортсменів.",
              "Усі наші покриття призначені для застосування всередині приміщень. Вінілові покриття на підлогу і спортивні паркети забезпечують довговічну, безпечну і естетичну основу для занять спортом, як високого рівня, так і в оздоровчих цілях.",
              "Ми маємо широку референтну базу, наші покриття на підлогу постачаються у понад 70 країн світу. Щодня кілька сотень тисяч людей змагаються, тренуються, займаються спортом у вільний час, тим самим тестують наші покриття на підлогу.",
              "Наша продукція сертифікована у всесвітньо відомих, незалежних інститутах."
            ],
          }
        },
          { _id: 'sport_pvc', name: 'Спортивні ПВХ покриття', ancestors: ['home', 'common', 'products', 'sport'], parent: 'sport',
            auth: 'casual', order: 1, prefix: '', assets: ['low_catalog_sport_pvc'],
            description: {
              "title": "Спортивні ПВХ покриття",
              "p": [
                "Компанія Грабопласт має понад 30 років досвіду в галузі виробництва та продажу вінілового покриття на підлогу спортивного призначення. Завдяки широкому асортименту, ми можемо  запропонувати покриття на підлогу, як для спортивних змагань, так і тренувань або спортивної діяльності з метою розваг. GraboSport характеризується чудовими спортивними та захисними властивостями:"
              ],
              "li": [
                "Відмінне поглинання енергії. Захист суглобів та хрящів. Завдяки поглинанню енергії, захищає суглоби та хрящі спортсменів навіть при систематичних заняттях спортом протягом тривалого періоду.",
                "Оптимально вертикальна деформація. Відмінний комфорт. Спеціально спінений шар на зворотному боці забезпечує оптимально вертикальну деформацію, що покращує комфорт покриття та знижує небезпеку отримання травми.",
                "Оптимальний коефіцієнт тертя. Баланс ковзання і зчеплення. Завдяки своїй конструкції, поверхня покриття на підлогу володіє таким коефіцієнтом тертя, який допомагає спортсмену легко та швидко змінювати напрямок свого руху, без ризику послизнутися.",
                "Відмінне відбивання м'яча від підлоги. Високі спортивні результати. Покриття на підлогу, що підходять для ігрових видів спорту з м'ячем, та своєю структурою не впливають на хід гри. Характеризуються відмінним відбиванням м'яча."
              ]
            }
          },
          { _id: 'sport_parquet', name: 'Спортивні паркети', ancestors: ['home', 'common', 'products', 'sport'], parent: 'sport',
            auth: 'casual', order: 2, prefix: '', assets: ['low_catalog_sport_parquet'],description: ''},

        { _id: 'transport', name: 'Транспортний лінолеум', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 7, prefix: '', assets: ['catalog_transport'],description: ''},

        { _id: 'show', name: 'Сценічний лінолеум', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 8, prefix: '', assets: ['catalog_show'],description: ''},


          // { _id: 'broadway17', name: 'Broadway 17', ancestors: ['home', 'common', 'products', 'show'], parent: 'show',
          //   auth: 'casual', order: 1, prefix: '', assets: ['catalog'],description: ''},
          // { _id: 'broadway20', name: 'Broadway 20', ancestors: ['home', 'common', 'products', 'show'], parent: 'show',
          //   auth: 'casual', order: 2, prefix: '', assets: ['catalog'],description: ''},
          // { _id: 'duett', name: 'Duett', ancestors: ['home', 'common', 'products', 'show'], parent: 'show',
          //   auth: 'casual', order: 3, prefix: '', assets: ['catalog'],description: ''},

        { _id: 'parquet', name: 'Паркет', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 5, prefix: '', assets: ['catalog_parquet'],description: ''},

        { _id: 'tile', name: 'Дизайнерська ПВХ плитка', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 6, prefix: '', assets: ['catalog_tile'],description: ''},


      { _id: 'gallery', name: 'Галерея', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 2, assets: ['catalog'],description: ''},
      // { _id: 'downloads', name: 'Завантаження', ancestors: ['home', 'common'], parent: 'common',
      //   auth: 'casual', order: 3, assets: ['catalog'],description: ''},
      // { _id: 'become_dealer', name: 'Стати дилером', ancestors: ['home', 'common'], parent: 'common',
      //   auth: 'casual', order: 4, assets: ['catalog'],description: ''},
      { _id: 'contacts', name: 'Контакти', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 5, assets: ['catalog'],description: ''},
      { _id: 'info', name: 'Про нас', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 6, assets: ['catalog'],description: ''},

    {_id: 'system', name:'Система', ancestors: ['home'], parent :'home',
      auth: 'guest', order: 2, assets:['catalog'], description:''},

      {_id: 'dashboard', name:'Dashboard', ancestors: ['home', 'system'], parent :'system',
        auth: 'guest', order: 1, assets:['catalog'],  description:''},
        {_id: 'profile', name: 'Профіль', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
          auth: 'guest', order: 1, assets: ['catalog'],description: ''},
        {_id: 'products_editor', name: 'Редактор колекцій', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
          auth: 'manager', order: 2, assets: ['catalog'], description: ''},
        {_id: 'designs_editor', name: 'Редактор дизайнів', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
          auth: 'manager', order: 3, assets: ['catalog'],description: ''},
        {_id: 'designs_editor_batch', name: 'Групове додавання дизайнів', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
          auth: 'manager', order: 4, assets: ['catalog'],description: ''},
        {_id: 'tools', name: 'Інструменти', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
          auth: 'manager', order: 5, assets: ['catalog'],description: ''},
      {_id: 'login', name: 'Увійти', ancestors: ['home', 'system'], parent: 'system',
        auth: 'casual', order: 2, assets: ['catalog'],description: ''},
      {_id: 'signup', name: 'Реєстрація', ancestors: ['home', 'system'], parent: 'system',
        auth: 'casual', order: 3, assets: ['catalog'],description: ''},
      {_id: 'logout', name: 'Вийти',ancestors: ['home', 'system'], parent: 'system',
        auth: 'casual', order: 4, assets: ['catalog'],description: ''},
]);
