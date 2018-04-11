export default {
	namespaced: true,
	state: {
		products: []
	},
	getters: {
		products(state) {
			return state.products;
		},
		cnt(state) {
			return state.products.length;
		},
		empty(state) {
			return state.products.length === 0;
		},
		totalPrice(state){
			let totalPrice = 0;
			for (let i = 0; i< state.products.length; i++) {
				totalPrice+= state.products[i].price
			}
			return totalPrice
		}
	},
	mutations: {
		add(state, product) {
			if(state.products.indexOf(product) === -1) {
				state.products.push(product);
			}
		},
		remove(state, id_product) {
			let pos = state.products.indexOf(id_product)
			if(pos !== -1) {
				state.products.splice(pos, 1);
			}
		}
	},
	actions: {
		add(store, product) {
			store.commit('add', product)
		},
		remove(store, id_product) {
			store.commit('remove', id_product)
		}
	}
};