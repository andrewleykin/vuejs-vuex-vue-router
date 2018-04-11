<template>
	<div>
		<h1>Products</h1>
		<div class="row">
			<div class="col col-sm-4" v-for="(item,index) in products" :key="index">
				<router-link tag="h3" :to="'/products/' + item.id_product">
					<a>{{ item.title }}</a>
				</router-link>
				<div>{{ item.price }}</div>
				<button 
					class="btn btn-primary" 
					@click="addToCart(item)"
					v-if="showBtn(item)"
					>Add to Cart</button>
				<button 
					class="btn btn-warning" 
					@click="removeFromCart(item)"
					v-else
					>Remove to Cart</button>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		created(){
			// Вариант вызова во время создания компонента ( вызов находиться в роутах )
			// this.$store.dispatch('products/loadItems');
		},
		computed: {
			...mapGetters('products', {
				products: 'items'
			}),
			...mapGetters('cart', {
				inCart: 'products'
			})
		},
		methods: {
			showBtn(item){
				if(this.inCart.indexOf(item) === -1) {
					return true
				}
			},
			...mapActions('cart', {
				addToCart: 'add',
				removeFromCart: 'remove'
			})
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}
</style>