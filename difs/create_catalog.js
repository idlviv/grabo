db.collection()
.insertMany([
  { _id: 'home', name: 'Головна', ancestors: [], parent: 'null',
    auth: 'casual', order: 0, assets: ['catalog'], description: ''},
    {_id:'common', name:'Загальні', ancestors:['home'], parent :'home',
      auth: 'casual', order:1, assets:['catalog'], description:''},
  
      { _id: 'products', name: 'Каталог', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 1, assets: ['product'], description: ''},

        { _id: 'residential', name: 'Побутовий лінолеум', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 1, prefix: '', assets: ['catalog_residential'], description: ''},
          // { _id: 'eco01', name: 'Eco 01', ancestors: ['home', 'common', 'products', 'residential'], parent: 'residential',
          //   auth: 'casual', order: 1, prefix: '', assets: ['catalog'], description: ''
          // },
          // { _id: 'viva', name: 'Viva', ancestors: ['home', 'common', 'products', 'residential'], parent: 'residential',
          //   auth: 'casual', order: 1, prefix: '', assets: ['catalog'], description: ''},

        { _id: 'semi_commercial', name: 'Напівкомерційний лінолеум', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 2, prefix: '', assets: ['catalog_semi_commercial'], description: ''},
          // { _id: 'astral_color', name: 'Astral color', ancestors: ['home', 'common', 'products', 'semi_commercial'], parent: 'semi_commercial',
          //   auth: 'casual', order: 2, prefix: '', assets: ['catalog'], description: ''},
          // { _id: 'top', name: 'Top extra', ancestors: ['home', 'common', 'products', 'semi_commercial'], parent: 'semi_commercial',
          //   auth: 'casual', order: 2, prefix: '', assets: ['catalog'], description: ''},
//!!!
        // { _id: 'parquet', name: 'Паркет', ancestors: ['home', 'common', 'products'], parent: 'products',
        //   auth: 'casual', order: 3, prefix: '', assets: ['catalog'], description: ''},

        { _id: 'commercial', name: 'Комерційний лінолеум', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 4, prefix: '', assets: ['catalog'], description: ''},
          // { _id: 'diamond_st_fresh', name: 'Diamond standart fresh', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
          //   auth: 'casual', order: 1, prefix: '', assets: ['catalog'], description: ''},
          // { _id: 'diamond_st_metal', name: 'Diamond standart metal', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
          //   auth: 'casual', order: 2, prefix: '', assets: ['catalog'], description: ''},
          // { _id: 'diamond_st_tech', name: 'Diamond standart tech', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
          //   auth: 'casual', order: 3, prefix: '', assets: ['catalog'], description: ''},
          // { _id: 'diamond_st_plaza', name: 'Diamond standart plaza', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
          //   auth: 'casual', order: 4, prefix: '', assets: ['catalog'], description: ''},
          // { _id: 'fortis', name: 'Fortis', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
          //   auth: 'casual', order: 5, prefix: '', assets: ['catalog'], description: ''},

//!!!!
			// { _id: 'safety', name: 'Безпечні покриття', ancestors: ['home', 'common', 'products', 'commercial'], parent: 'commercial',
			//   auth: 'casual', order: 1, prefix: '', assets: ['catalog'], description: ''},
      //
       //  { _id: 'transport', name: 'Транспортний лінолеум', ancestors: ['home', 'common', 'products'], parent: 'products',
       //    auth: 'casual', order: 5, prefix: '', assets: ['catalog'], description: ''},
      //
       //  { _id: 'show', name: 'Сценічний лінолеум', ancestors: ['home', 'common', 'products'], parent: 'products',
       //    auth: 'casual', order: 6, prefix: '', assets: ['catalog'], description: ''},


          // { _id: 'broadway17', name: 'Broadway 17', ancestors: ['home', 'common', 'products', 'show'], parent: 'show',
          //   auth: 'casual', order: 1, prefix: '', assets: ['catalog'], description: ''},
          // { _id: 'broadway20', name: 'Broadway 20', ancestors: ['home', 'common', 'products', 'show'], parent: 'show',
          //   auth: 'casual', order: 2, prefix: '', assets: ['catalog'], description: ''},
          // { _id: 'duett', name: 'Duett', ancestors: ['home', 'common', 'products', 'show'], parent: 'show',
          //   auth: 'casual', order: 3, prefix: '', assets: ['catalog'], description: ''},

        { _id: 'tile', name: 'Дизайнерська ПВХ плитка', ancestors: ['home', 'common', 'products'], parent: 'products',
          auth: 'casual', order: 6, prefix: '', assets: ['catalog_tile'], description: ''},
          // { _id: 'plankit', name: 'Plankit', ancestors: ['home', 'common', 'products', 'tile'], parent: 'tile',
          //   auth: 'casual', order: 6, prefix: '', assets: ['catalog'], description: ''},
          // { _id: 'domino', name: 'Domino', ancestors: ['home', 'common', 'products', 'tile'], parent: 'tile',
          //   auth: 'casual', order: 6, prefix: '', assets: ['catalog'], description: ''},

      { _id: 'gallery', name: 'Галерея', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 2, assets: ['catalog'], description: ''},
      { _id: 'downloads', name: 'Завантаження', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 3, assets: ['catalog'], description: ''},
      { _id: 'become_dealer', name: 'Стати дилером', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 4, assets: ['catalog'], description: ''},
      { _id: 'contacts', name: 'Контакти', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 5, assets: ['catalog'], description: ''},
      { _id: 'info', name: 'Про нас', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 6, assets: ['catalog'], description: ''},

    {_id: 'system', name:'Система', ancestors: ['home'], parent :'home',
      auth: 'guest', order: 2, assets:['catalog'], description:''},

      {_id: 'dashboard', name:'Dashboard', ancestors: ['home', 'system'], parent :'system',
        auth: 'guest', order: 1, assets:['catalog'],  description:''},
        {_id: 'profile', name: 'Профіль', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
          auth: 'guest', order: 1, assets: ['catalog'], description: ''},
        {_id: 'products_editor', name: 'Редагувати колекції', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
          auth: 'manager', order: 2, assets: ['catalog'],  description: ''},
        {_id: 'designs_editor', name: 'Редагувати дизайни', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
          auth: 'manager', order: 3, assets: ['catalog'], description: ''},
      {_id: 'login', name: 'Увійти', ancestors: ['home', 'system'], parent: 'system',
        auth: 'casual', order: 2, assets: ['catalog'], description: ''},
      {_id: 'signup', name: 'Реєстрація', ancestors: ['home', 'system'], parent: 'system',
        auth: 'casual', order: 3, assets: ['catalog'], description: ''},
      {_id: 'logout', name: 'Вийти',ancestors: ['home', 'system'], parent: 'system',
        auth: 'casual', order: 4, assets: ['catalog'], description: ''},
]);
