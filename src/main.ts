import createApp from 'dojo-app/createApp';
import createWidget from 'dojo-widgets/createWidget';
import createMemoryStore from 'dojo-widgets/util/createMemoryStore';

const widgetStore = createMemoryStore({
	data: [
		{
			id: 'book-store',
			label: 'Book Store'
		},
		{
			id: 'book-store-title',
			label: 'Book Store Title'
		}

	]
});

const app = createApp({ defaultStore: widgetStore });

app.loadDefinition({
	widgets: [
		{
			id: 'book-store',
			factory: createWidget
		}
	],
	customElements: [
		{
			name: 'dojo-widget',
			factory: createWidget
		}
	]

});

app.realize(document.body);
