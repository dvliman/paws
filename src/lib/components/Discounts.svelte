<script>
	import Tiny from '$lib/assets/about/tiny.jpeg';
	import Taco from '$lib/assets/about/taco.jpeg';
	import Nino from '$lib/assets/about/nino.jpeg';
</script>

<section>
	<h1>Discounts & Coupons</h1>
	<p>Check out the different discounts we offer below!</p>

	<div class="discount">
		<h2>New Customer Discount - $20 off!</h2>
		<img src={Tiny} alt="New Customer Discount - $20 off"/>
    <span>Valid from 04/01/2022 to 04/01/32</span>
    <button>Print</button>
    <button>Share</button>
	</div>

	<div class="discount">
		<h2>Refer a Friend or Neighbor</h2>
		<img src={Taco} alt="Refer a Friend or Neighbor"/>
    <span>Valid from 04/01/2022 to 04/01/32</span>
    <button>Print</button>
    <button>Share</button>
	</div>

	<div class="discount">
		<h2>Multiple Pet Discount</h2>
		<img src={Nino} alt="Multiple Pet Discount"/>
    <span>Valid from 04/01/2022 to 04/01/32</span>
    <button>Print</button>
    <button>Share</button>
	</div>
</section>

<style>
	h1, p {
		width: 100%;
		text-align: center;
	}
  section {
		& div {
			flex: 1;
		}
	}
  .discount {
		padding: 1rem;
		border-radius: 1rem;
		border: 2px dashed #AAA;
    & img {
			width: 200px;
			height: 200px;
			object-fit: cover;
			border-radius: 50%;
		}
  }
</style>