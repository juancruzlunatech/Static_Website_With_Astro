export const recipes = [
	{
		id: 'empanadas',
		image: '/empanadas_tucumanas.png',
		es: {
			title: 'Empanadas Tucumanas',
			description: 'Las auténticas empanadas cortadas a cuchillo. Jugosas, hechas con matambre de vaca, pasas de uva, huevo duro y aceitunas.',
			time: '1h 30m',
			difficulty: 'Media',
			ingredients: ['1 kg de matambre de vaca', '1 kg de cebolla blanca', '200g de grasa pella', '6 huevos duros', 'Tapas para empanadas criollas'],
			steps: ['Hervir matambre.', 'Rehogar cebolla y mezclar carne.', 'Agregar huevo.', 'Rellenar tapas.', 'Hornear.']
		},
		en: {
			title: 'Tucuman Empanadas',
			description: 'Authentic hand-cut meat empanadas. Juicy, made with flank steak, raisins, hard-boiled egg and olives.',
			time: '1h 30m',
			difficulty: 'Medium',
			ingredients: ['1 kg beef flank', '1 kg white onion', '200g beef fat', '6 hard-boiled eggs', 'Empanada dough discs'],
			steps: ['Boil steak.', 'Sauté onion and mix meat.', 'Add egg.', 'Fill dough.', 'Bake.']
		}
	},
	{
		id: 'asado',
		image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
		es: {
			title: 'Asado Tradicional',
			description: 'El clásico domingo argentino. Costillar, vacío, tira de asado y achuras cocinadas lentamente al fuego de leña. Acompañado de un buen chimichurri.',
			time: '3h',
			difficulty: 'Alta',
			ingredients: ['Tira de asado', 'Vacío', 'Chorizos', 'Sal gruesa', 'Leña o Carbón', 'Chimichurri'],
			steps: ['Encender fuego.', 'Salar carne.', 'Asar a fuego lento.', 'Girar cuando transpire.', 'Servir en tabla.']
		},
		en: {
			title: 'Traditional Asado',
			description: 'The classic Argentine Sunday BBQ. Slowly grilled ribs, flank steak and sausages over wood fire. Served with chimichurri.',
			time: '3h',
			difficulty: 'High',
			ingredients: ['Short ribs', 'Flank steak', 'Sausages', 'Coarse salt', 'Wood or Charcoal', 'Chimichurri'],
			steps: ['Light fire.', 'Salt meat.', 'Grill slowly.', 'Turn when juices appear.', 'Serve on wooden board.']
		}
	},
	{
		id: 'alfajores',
		image: '/alfajores_de_maicena.png',
		es: {
			title: 'Alfajores de Maicena',
			description: 'Suaves tapas de maicena rellenas de abundante dulce de leche y rodeadas de coco rallado. El acompañamiento perfecto para el mate.',
			time: '1h',
			difficulty: 'Baja',
			ingredients: ['200g harina', '300g maicena', '200g manteca', '150g azúcar impalpable', 'Dulce de leche repostero', 'Coco picado'],
			steps: ['Mezclar secos', 'Cremar manteca y azúcar', 'Unir sin amasar', 'Hornear discos', 'Unir con dulce de leche y coco']
		},
		en: {
			title: 'Cornstarch Alfajores',
			description: 'Soft cornstarch cookies filled with thick dulce de leche and rolled in shredded coconut. Perfect with mate.',
			time: '1h',
			difficulty: 'Low',
			ingredients: ['200g flour', '300g cornstarch', '200g butter', '150g powdered sugar', 'Baking dulce de leche', 'Shredded coconut'],
			steps: ['Mix dry ingredients', 'Cream butter and sugar', 'Combine gently', 'Bake discs', 'Fill with dulce de leche and add coconut']
		}
	},
	{
		id: 'milanesa',
		image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80&w=800',
		es: {
			title: 'Milanesa a la Napolitana',
			description: 'La leyenda de Buenos Aires. Milanesa de carne empanizada al horno, cubierta con salsa de tomate, jamón, queso derritido y orégano.',
			time: '45m',
			difficulty: 'Baja',
			ingredients: ['Nalga de vaca fina', 'Huevos, ajo, perejil', 'Pan rallado', 'Salsa de tomate', 'Jamón cocido', 'Muzzarella'],
			steps: ['Batir huevos con ajo.', 'Empanar carne.', 'Freír o hornear.', 'Cubrir con salsa, jamón y queso.', 'Gratinar 5 min.']
		},
		en: {
			title: 'Napolitan Milanesa',
			description: 'The Buenos Aires legend. Breaded beef steak topped with tomato sauce, ham, melted mozzarella cheese and oregano.',
			time: '45m',
			difficulty: 'Low',
			ingredients: ['Thin beef steaks', 'Eggs, garlic, parsley', 'Breadcrumbs', 'Tomato sauce', 'Cooked ham', 'Mozzarella cheese'],
			steps: ['Beat eggs with garlic.', 'Bread the steaks.', 'Fry or bake.', 'Top with sauce, ham, and cheese.', 'Broil for 5 mins.']
		}
	},
	{
		id: 'locro',
		image: '/locro.png',
		es: {
			title: 'Locro Patrio',
			description: 'Un guiso espeso perfecto para fechas patrias. Hecho a base de maíz blanco, porotos, zapallo y diferentes cortes de carne de cerdo y vaca.',
			time: '4h',
			difficulty: 'Alta',
			ingredients: ['Maíz blanco pisado', 'Porotos pallares', 'Zapallo plomo', 'Pechito de cerdo', 'Chorizo colorado', 'Panceta'],
			steps: ['Remojar maíz y porotos.', 'Hervir despacio legumbres y verduras.', 'Agregar carnes.', 'Ligar con zapallo.', 'Servir con salsa picante.']
		},
		en: {
			title: 'Traditional Locro',
			description: 'A thick, hearty stew perfect for national holidays. Made with white corn, beans, squash, and various cuts of pork and beef.',
			time: '4h',
			difficulty: 'High',
			ingredients: ['Hominy white corn', 'Lima beans', 'Squash', 'Pork ribs', 'Spanish chorizo', 'Bacon'],
			steps: ['Soak corn and beans.', 'Slow boil legumes and veggies.', 'Add meats.', 'Thicken with squash.', 'Serve with hot sauce.']
		}
	},
	{
		id: 'choripan',
		image: '/choripan.png',
		es: {
			title: 'Choripán Argentino',
			description: 'Sándwich glorioso de chorizo a la parrilla dentro de un pan francés crujiente, rebosado en salsa chimichurri.',
			time: '30m',
			difficulty: 'Muy Baja',
			ingredients: ['Chorizos de puro cerdo', 'Pan flauta o francés', 'Chimichurri fresco', 'Salsa criolla (opcional)'],
			steps: ['Asar los chorizos a la parrilla o plancha.', 'Cortar en formato mariposa al final.', 'Tostar el pan.', 'Agregar abundante chimichurri.', 'Cerrar y disfrutar.']
		},
		en: {
			title: 'Argentine Choripan',
			description: 'Glorious grilled sausage sandwich inside crusty French bread, overflowing with fresh chimichurri sauce.',
			time: '30m',
			difficulty: 'Very Low',
			ingredients: ['Pure pork sausages', 'French baguette bread', 'Fresh chimichurri', 'Criolla sauce (optional)'],
			steps: ['Grill sausages on BBQ.', 'Butterfly cut them at the end.', 'Toast the bread.', 'Add plenty of chimichurri.', 'Close and enjoy.']
		}
	},
	{
		id: 'flan',
		image: '/flan_mixto.png',
		es: {
			title: 'Flan Mixto',
			description: 'Un clásico postre de bodegón. Flan acaramelado, suave y cremoso, coronado con tanto dulce de leche como crema chantilly.',
			time: '1h 30m',
			difficulty: 'Media',
			ingredients: ['1L Leche', '8 Huevos', '200g Azúcar', 'Esencia Vainilla', 'Azúcar para caramelo', 'Dulce de Leche', 'Crema'],
			steps: ['Acaramelar molde.', 'Mezclar huevos, leche y azúcar sin espumar.', 'Volcar en molde.', 'Hornear a baño maría.', 'Enfriar y servir mixto.']
		},
		en: {
			title: 'Mixed Flan Custard',
			description: 'A classic local dessert. Caramelized, soft and creamy custard, crowned with both dulce de leche and whipped cream.',
			time: '1h 30m',
			difficulty: 'Medium',
			ingredients: ['1L Milk', '8 Eggs', '200g Sugar', 'Vanilla extract', 'Sugar for caramel', 'Dulce de Leche', 'Heavy cream'],
			steps: ['Caramelize mold.', 'Mix eggs, milk and sugar without foaming.', 'Pour into mold.', 'Bake in water bath.', 'Chill and serve mixed.']
		}
	},
	{
		id: 'pastelitos',
		image: '/pastelitos.png',
		es: {
			title: 'Pastelitos de Membrillo',
			description: 'Masas hojaldradas fritas, crujientes por fuera y jugosas por dentro, rellenas de dulce de membrillo y bañadas en almíbar.',
			time: '1h',
			difficulty: 'Media',
			ingredients: ['Masa de hojaldre para pastelitos', 'Dulce de membrillo', 'Aceite o Grasa para freír', 'Almíbar', 'Grageas'],
			steps: ['Cortar dulce de membrillo.', 'Colocar en el centro del cuadrado de masa.', 'Cerrar en forma de estrella.', 'Freír en abundante grasa.', 'Bañar en almíbar.']
		},
		en: {
			title: 'Quince Pastelitos',
			description: 'Deep-fried puff pastries, crispy outside and juicy inside, filled with quince paste and glazed in light syrup.',
			time: '1h',
			difficulty: 'Medium',
			ingredients: ['Puff pastry squares', 'Quince paste', 'Oil or beef fat for frying', 'Simple syrup', 'Sprinkles'],
			steps: ['Cube quince paste.', 'Place in center of pastry.', 'Close in a star shape.', 'Deep fry.', 'Glaze with syrup.']
		}
	},
	{
		id: 'humita',
		image: 'https://images.unsplash.com/photo-1626200419189-3b58eb14affc?auto=format&fit=crop&q=80&w=800',
		es: {
			title: 'Humita en Chala',
			description: 'El sabor tradicional del norte. Una crema espesa de choclo, zapallo y albahaca, cocinada y envuelta en la propia chala del maíz.',
			time: '2h',
			difficulty: 'Alta',
			ingredients: ['12 Choclos (maíz)', 'Zapallo criollo', 'Cebolla', 'Albahaca fresca', 'Pimentón y Ají', 'Queso cremoso'],
			steps: ['Rallar o procesar el choclo.', 'Hacer un sofrito de cebolla.', 'Mezclar con choclo, zapallo y albahaca.', 'Colocar en chalas con un trozo de queso.', 'Hervir las humitas armadas.']
		},
		en: {
			title: 'Steamed Humita',
			description: 'The traditional northern flavor. A thick cream of corn, squash and basil, cooked and wrapped inside fresh corn husks.',
			time: '2h',
			difficulty: 'High',
			ingredients: ['12 Ears of corn', 'Squash', 'Onion', 'Fresh basil', 'Paprika and chili', 'Cream cheese'],
			steps: ['Grate or process corn.', 'Sauté chopped onion.', 'Mix with corn, squash and basil.', 'Wrap in husks with a piece of cheese.', 'Boil wrapped humitas.']
		}
	},
	{
		id: 'provoleta',
		image: 'https://images.unsplash.com/photo-1605342417646-c22ae2492160?auto=format&fit=crop&q=80&w=800',
		es: {
			title: 'Provoleta Asada',
			description: 'Una generosa rodaja de queso provolone asada a la parrilla o plancha, con una costra dorada por fuera y derretida en su interior.',
			time: '15m',
			difficulty: 'Baja',
			ingredients: ['Rueda de queso Provolone hilado', 'Orégano', 'Ají molido', 'Aceite de oliva', 'Pan crujiente'],
			steps: ['Orear el queso al aire por unas horas.', 'Calentar fuertemente la plancha o parrilla.', 'Dorar el queso 3 minutos de cada lado.', 'Espolvorear orégano.', 'Servir inmediatamente con pan.']
		},
		en: {
			title: 'Grilled Provoleta',
			description: 'A generous slice of provolone cheese grilled perfectly, boasting a golden crispy crust outside and melted core inside.',
			time: '15m',
			difficulty: 'Low',
			ingredients: ['Round slice of Provolone cheese', 'Oregano', 'Red pepper flakes', 'Olive oil', 'Crusty bread'],
			steps: ['Dry cheese slice in the air for hours.', 'Heat grill or pan intensely.', 'Sear cheese 3 mins on each side.', 'Sprinkle oregano.', 'Serve immediately with bread.']
		}
	}
];
