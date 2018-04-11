import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductList from './components/ProductsList';
import Product from './components/Product';
import Cart from './components/Cart';
import E404 from './components/E404';

import {store} from './store';

const routes = [
	{
		path: '',
		redirect: {name: 'products'}
	},
	{
		name: 'products',
		path: '/products',
		component: ProductList,
		beforeEnter(from, to, next) {
			store.dispatch('products/loadItems');
			next();
		}
	},
	{
		path: '/products/:id',
		component: Product
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '*',
		component: E404
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history',
	base: 'https://andrewleykin.github.io/vuejs-vuex-vue-router/'
});