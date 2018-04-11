<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<div v-if="empty" class="alert alert-warning">
			Your Cart is empty
		</div>
		<template v-else>
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
						<th>Title</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(product,index) in productsInCart" 
							:key="index" 
							@dblclick="removeFromCart(product)">
						<th>{{ product.title }}</th>
						<th>{{ product.price }}</th>
					</tr>
				</tbody>
			</table>
			<h2>Total price : {{ totalPrice }}</h2>
			<button
				@click="onOrder" 
				class="btn btn-success"
				>Order Now!</button>
		</template>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		computed: {
			...mapGetters('cart', {
				productsInCart: 'products',
				empty: 'empty',
				totalPrice: 'totalPrice'
			})
		},
		methods: {
			onOrder() {
				this.$router.push('/checkout');
			},
			...mapActions('cart', {
				removeFromCart: 'remove'
			})
		}
	}
</script>