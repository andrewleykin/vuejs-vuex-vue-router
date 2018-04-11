<template>
	<div>
		<h1>{{ product.title }}</h1>
		<router-link :to="{name: 'products'}">Back to products</router-link>
		<hr>
		<h2>{{ product.price }}</h2>
		<div class="alert alert-success" v-if="showAlert">
			Added to cart your product : {{ product.title }}
		</div>
		<button 
					class="btn btn-primary" 
					@click="onAdd(product)"
					v-if="showBtn(product)"
					>Add to Cart</button>
				<button 
					class="btn btn-warning" 
					@click="onRemove(product)"
					v-else
					>Remove to Cart</button>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		data() {
			return {
				showAlert: false
			}
		},
		computed: {
			...mapGetters('cart', {
				inCart: 'products'
			}),
			id(){
				return this.$route.params.id;
			},
			product(){
				return this.$store.getters['products/item'](this.id)
			}
		},
		methods: {
			onAdd(item) {
				this.showAlert = !this.showAlert;
				this.addToCart(item);
			},
			onRemove(item) {
				this.showAlert = !this.showAlert;
				this.removeFromCart(item)
			},
			showBtn(item) {
					return this.inCart.indexOf(item) === -1
			},
			...mapActions('cart', {
				addToCart: 'add',
				removeFromCart: 'remove'
			})
		},
		created(){
			if(this.showBtn(this.product)) {
				this.showAlert = false;
			} else {
				this.showAlert = true;
			}
		}
	}
</script>