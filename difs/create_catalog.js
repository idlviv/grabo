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
          description: {
            "title": "Напівкомерційне покриття",
            "p": [
             "Грабопласт, використовуючи свій понад 50-річний досвід в галузі виробництва вінілового покриття на підлогу, пропонує інноваційні рішення для будь-яких технічних або дизайнерських вимог, що виникають у різних областях."
            ],
            "li": [
              "<h3 class='mat-h3'>Основні характеристики: </h3>",
              "Висока зносостійкість",
              "Хороша звукоізоляція",
              "Комфорт та зручність для ніг",
              "Легкий догляд",
              "Просте та швидке встановлення",
              "Стабільність в розмірах",
              "Різноманітне призначення в громадських місцях",
            ]
          }
        },
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
            auth: 'casual', order: 1, prefix: '', assets: ['catalog_commercial_diamond'],
            description: {
              "title": "Diamond",
              "p": [
                "Grabo Diamond є компактними, гетерогенним покриттям на підлогу в рулонах, товщиною 2,0 мм, з чистим прозорим зносостійким шаром із ПВХ товщиною 0,7 мм.",
                "Рекомендованими областями застосування покриття на підлогу Grabo Diamond є заклади системи охорони здоров'я, школи, офіси, а також приміщення системи торгівлі та ресторанного бізнесу."
              ],
            }
          },
          { _id: 'homogen', name: 'Гомогенні покриття', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
            auth: 'casual', order: 2, prefix: '', assets: ['low_catalog_homogen'],description: ''},
          { _id: 'safety', name: 'Безпечні покриття', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
            auth: 'casual', order: 3, prefix: '', assets: ['low_catalog_safety'],
            description: {
              "title": "Safety",
              "p": [
                "Всі колекції Grabo Safety характеризуються високим технічним характеристиками, що задовольняють потреби безпечного покриття на підлогу.",
                "Широкий асортимент малюнків та кольорів цієї групи буде ідеальним рішенням для  будь-якої області застосування, собливо, де потрібно забезпечити не слизьку поверхню."
              ],
            }
          },
          { _id: 'acoustic', name: 'Акустичні покриття', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
            auth: 'casual', order: 4, prefix: '', assets: ['low_catalog_acoustic'],
            description: {
              "title": "Acoustic",
              "p": [
                "Застосування покриття на підлогу Acoustic рекомендується в таких установах, де, окрім високої зносостійкості, важливими вимогами зниження шуму та комфорт при ходьбі.",
                "Широкий асортимент Grabo Acoustic допоможе підібрати відповідний варіант для будь-якої сфери застосування."
              ],
            }
          },
          { _id: 'silver_knight', name: 'Silver Knight', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
            auth: 'casual', order: 5, prefix: '', assets: ['low_catalog_silver_knight'],
            description: {
              "title": "Silver Knight",
              "p": [
                "Використовуючи запатентовану технологію TECH Surface ми розробили еластичне покриття на підлогу Grabo Silver Knight, що є чудовим рішення проблеми системи охорони здоров'я, розповсюдженням інфекцій по лікарнях.",
                "Grabo Silver Knight – не просто покриття на підлогу, це перша фотокаталітична самодезінфікуюча поверхня, що є ідеальним вибором в будь-якій області охорони здоров'я.",
                "Подвійна захисна система, що складається з наносрібла і нано-частинок TiO2, створює антибактеріальну властивість покриття.",
                "На професійній виставці Neocon в Чикаго в 2010 році, здатність знищувати бактерії покриття на підлогу компанії Грабопласт нагороджено гран-прі в області інновацій продукції.",
                "Grabo Silver Knight ми пропонуємо трьох конструкціях, в щільному і пінному виконанні."
              ],
            }
          },
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
                "<h3 class='mat-h3'>Відмінне поглинання енергії. Захист суглобів та хрящів</h3>" +
                "<p>Завдяки поглинанню енергії, захищає суглоби та хрящі спортсменів навіть при систематичних заняттях спортом протягом тривалого періоду.</p>",

                "<h3 class='mat-h3'>Оптимально вертикальна деформація. Відмінний комфорт.</h3>" +
                "<p>Спеціально спінений шар на зворотному боці забезпечує оптимально вертикальну деформацію, що покращує комфорт покриття та знижує небезпеку отримання травми.</p>",

                "<h3 class='mat-h3'>Оптимальний коефіцієнт тертя. Баланс ковзання і зчеплення.</h3>" +
                "<p>Завдяки своїй конструкції, поверхня покриття на підлогу володіє таким коефіцієнтом тертя, який допомагає спортсмену легко та швидко змінювати напрямок свого руху, без ризику послизнутися.</p>",

                "<h3 class='mat-h3'>Відмінне відбивання м'яча від підлоги. Високі спортивні результати.</h3>" +
                "<p> Покриття на підлогу, що підходять для ігрових видів спорту з м'ячем, та своєю структурою не впливають на хід гри. Характеризуються відмінним відбиванням м'яча.</p>",

              ]
            }
          },
          { _id: 'sport_parquet', name: 'Спортивні паркети', ancestors: ['home', 'common', 'products', 'sport'], parent: 'sport',
            auth: 'casual', order: 2, prefix: '', assets: ['low_catalog_sport_parquet'],description: ''},

        { _id: 'transport', name: 'Транспортний лінолеум', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 7, prefix: '', assets: ['catalog_transport'],
          description: {
            "title": "Транспортний лінолеум",
            "p": [
              "Понад 50-річний досвід в галузі виробництва рулонного, вінілового покриття на підлогу, ЗАТ Грабопласт пропонує інноваційні рішення для будь-яких запитів технічного або дизайнерського характеру, що виникають у побутовому та комерційному секторі.",
              "Наша компанія виготовляє вінілові покриття на підлогу в рулонах, що складаються з багатьох шарів. Вони мають значимі властивості, тим самим підвищують споживчу цінність нашої продукції.",
              "Верхній захисний шар гетерогенного вінілового покриття на підлогу складається з чистого транспарентного ПВХ, без додавання наповнювачів, що гарантує максимальну зносостійкість.",
              "Скловолокно між шарами забезпечує відмінну стабільність розмірів. Інші переваги – великий вибір малюнка і легкість в укладці.",
              "Лінолеум graboVoyage є найкращим рішенням для міських, міжміських і екскурсійних автобусів. Розроблена нами технологія покриття на підлогу graboOrient підходить для екстремальних умов роботи, згідно з вимогами транспортної промисловості. Лінолеум graboOrient є найкращим вибором для метро і поїздів."

            ],
            "li": [
              "<h2 class='h2'>Важливі характерні риси Grabo Voyage і Orient:</h2>",

              "<h3 class='mat-h3'>Безпека</h3>" +
              "<p>Не слизька поверхня, завдяки цій властивості можна запобігти нещасних випадків. Характеризуються екстремально хорошими показниками вогнестійкості та токсичності.</p>" +
              "<p>З grabo Voyage і Orient можна формувати попереджувальні знаки, що звертають увагу пасажирів на можливу небезпеку, наприклад, на край сходів і т.д. Безпечне експлуатування, так як водонепроникне покриття захищає конструкцію основи.</p>",

              "<h3 class='mat-h3'>Довговічність</h3>" +
              "<p>Зносостійкі, довгий період часу зберігають свої основні поверхневі властивості, наприклад, протиковзання, незмінність дизайну.</p>" +
              "<p>Мають надзвичайно високу стійкість до втомних навантажень, що виникають при звичних умовах експлуатації транспортних засобів.</p>" +
              "<p>Утримувати в чистоті достатньо простими засобами при систематичному прибиранні, таким чином, легко зберегти первісну красу.</p>",

              "<h3 class='mat-h3'>Легка обробка</h3>" +
              "<p>Гнучкі, просто вкладаються. Легко формуються дуги, покривають важкодоступні місця, формують вигини уздовж стін.</p>" +
              "<p>Grabo Voyage і Orient мають порівняно невелику вагу, незважаючи на свою довговічність. Додатковою перевагою цієї властивості є можливість зменшення загальної ваги транспортних засобів, їхнього енергоспоживання і навантаження на навколишнє середовище.</p>" +
              "<p>Grabo Voyage і Orient із шаром \"Flexyback\" на зворотному боці просто приклеюються, легко покривають гострі кути і точки зламу.</p>",

              "<h3 class='mat-h3'>Індивідуальність</h3>" +
              "<p>Великий асортимент Grabo Voyage і Orient має товщину від 2 мм.</p>" +
              "<p>Широкий вибір дизайнів.</p>" +
              "<p>Вироби в рулонах мають дві стандартні ширини.</p>" +
              "<p>Можна підібрати за кольором зварювальні шнури різних профілів.</p>" +
              "<p>Приймаємо замовлення на виготовлення логотипів та написів.</p>" +
              "<p>Пропонуємо елементи з покриття на підлогу, крій на основі індивідуальних розмірів.</p>",

              "<h3 class='mat-h3'>Надійність</h3>" +
              "<p>Якість нашої продукції підтримується сертифікатом ISO 9001 та ISO 14001. Випробування якості проводиться незалежними інститутами.</p>" +
              "<p>Широкий асортимент транспортного покриття на підлогу випускається у вигляді рулонів.</p>" +
              "<p>Ми передаємо свій досвід, що здобули за кілька десятиліть, свої  технічні знання та методи застосування покриття на підлогу нашим партнерам.</p>",

            ]
          }
        },
          { _id: 'voyage', name: 'Voyage', ancestors: ['home', 'common', 'products', 'transport'], parent: 'transport',
            auth: 'casual', order: 1, prefix: '', assets: ['low_catalog_voyage'],
            description: ''},
            { _id: 'omnis', name: 'Omnis', ancestors: ['home', 'common', 'products', 'transport', 'voyage'], parent: 'voyage',
              auth: 'casual', order: 1, prefix: '', assets: ['low_catalog_omnis'],
              description: ''},
            { _id: 'stop_f', name: 'Stop F', ancestors: ['home', 'common', 'products', 'transport', 'voyage'], parent: 'voyage',
              auth: 'casual', order: 2, prefix: '', assets: ['low_catalog_stop_f'],
              description: ''},
            { _id: 'transport_acoustic', name: 'Acoustic', ancestors: ['home', 'common', 'products', 'transport', 'voyage'], parent: 'voyage',
              auth: 'casual', order: 3, prefix: '', assets: ['low_catalog_transport_acoustic'],
              description: ''},
            { _id: 'jp', name: 'JP', ancestors: ['home', 'common', 'products', 'transport', 'voyage'], parent: 'voyage',
              auth: 'casual', order: 4, prefix: '', assets: ['low_catalog_jp'],
              description: ''},
        { _id: 'orient', name: 'Orient', ancestors: ['home', 'common', 'products', 'transport'], parent: 'transport',
          auth: 'casual', order: 2, prefix: '', assets: ['low_catalog_orient'],
          description: ''},
          { _id: 'classic', name: 'Classic', ancestors: ['home', 'common', 'products', 'transport', 'orient'], parent: 'orient',
            auth: 'casual', order: 1, prefix: '', assets: ['low_catalog_classic'],
            description: ''},
          { _id: 'railway', name: 'Railway', ancestors: ['home', 'common', 'products', 'transport', 'orient'], parent: 'orient',
            auth: 'casual', order: 2, prefix: '', assets: ['low_catalog_railway'],
            description: ''},


        { _id: 'show', name: 'Сценічний лінолеум', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 8, prefix: '', assets: ['catalog_show'],description: ''},


          // { _id: 'broadway17', name: 'Broadway 17', ancestors: ['home', 'common', 'products', 'show'], parent: 'show',
          //   auth: 'casual', order: 1, prefix: '', assets: ['catalog'],description: ''},
          // { _id: 'broadway20', name: 'Broadway 20', ancestors: ['home', 'common', 'products', 'show'], parent: 'show',
          //   auth: 'casual', order: 2, prefix: '', assets: ['catalog'],description: ''},
          // { _id: 'duett', name: 'Duett', ancestors: ['home', 'common', 'products', 'show'], parent: 'show',
          //   auth: 'casual', order: 3, prefix: '', assets: ['catalog'],description: ''},

        { _id: 'parquet', name: 'Паркет', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 5, prefix: '', assets: ['catalog_parquet'],
          description: {
            "title": "СПРАВЖНІЙ ПАРКЕТ У ВАШОМУ ДОМІ",
            "p": [
              "Маючи великий досвід в області виробництва паркету, ми використовуємо найсучасніші технології для обробки найдавнішого будівельного матеріалу з метою створення досконалої у всіх відношеннях дерев'яної підлоги. Немає значення паркет класичний чи сучасна модель, продиктована модою, ми використовуємо високоякісні вихідні матеріали та даємо гарантію естетичного задоволення на довгий період. ",
              "<h3 class='mat-h3'>В СЕРЦІ ЄВРОПИ, НА СВІТОВОМУ РІВНІ</h3>" +
              "<p>Виробництво нашої продукції, що має сертифікати CE, в інтересах безперервної підтримки гарантії якості, відбувається із суворою системою управління якістю та навколишнім середовищем. Грабопласт - один із найбільших паркетних заводів Середньої Європи, надійність продукції підтверджується сертифікатами стандартів ISO9001 і ISO14001.</p>",

              "<h3 class='mat-h3'>В ГАРМОНІЇ З НАВКОЛИШНІМ СЕРЕДОВИЩЕМ</h3>" +
              "<p>В процесі виробництва паркету Грабо, ми прагнемо досконалості, ніколи не забуваємо, що вихідний матеріал, з яким працюємо, є подарунком, дарованим нам природою.</p>" +
              "<p>Для нас важливо, щоб деревина, що використовується для виробництва високоякісної продукції, походила з контрольованого джерела, яке гарантує, що наша робота проходить в гармонії з навколишнім середовищем.</p>" +
              "<p>Забезпечення цих умов та постійний контроль є спільним інтересом для усіх нас. Дотримуючись своїх обов'язків, ми прийняли рішення: виготовлені паркети Грабо повинні відповідати сертифікатам PEFC.</p>",

            ],
          }
        },

        { _id: 'tile', name: 'Дизайнерська ПВХ плитка', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 6, prefix: '', assets: ['catalog_tile'],
          description: {
            "title": "Дизайнерська LVT плитка",
            "p": [
              "Дизайнерська плитка (LVT - luxury vinyl tile) - гетерогенне, дуже реалістичне покриття на підлогу, у вигляді листів. Вона найчастіше використовується для покриття підлоги в магазинах, готелях, ресторанах, офісах, школах та житлових будинках.",
              "Її перевагою, окрім декоративного зовнішнього вигляду, є довговічність, відмінна стійкість до подряпин та зносу. Це покриття на підлогу не боїться вологи, тому область його застосування порівняно ширша, ніж у паркетів та ламінатів."
            ],
          }
        },

  { _id: 'wall', name: 'Покриття для стін', ancestors: ['home', 'common', 'products'], parent: 'products',
    auth: 'casual', order: 7, prefix: '', assets: ['low_catalog_wall'],
    description: ''
  },


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
