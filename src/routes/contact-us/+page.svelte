<script>
	import Icon from '@iconify/svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="Contact Us" description="Leave a text message at (714) 253-2851" />

<section>
	<h1>Contact us</h1>
	<div>
		<Icon icon="akar-icons:location" />
		<h3>Location</h3>
		<p>16561 China Berry Ct, Chino Hills, CA 91709</p>
	</div>
	<div>
		<Icon icon="akar-icons:clock" />
		<h3>Hours</h3>
		<ul>
			<li>
				<strong>Monday - Friday</strong>
				<p>8:00 am - 5:00 pm</p>
			</li>
			<li>
				<strong>Saturday</strong>
				<p>8:00 am - 12:00 pm</p>
			</li>
			<li>
				<strong>Sunday</strong>
				<p>Closed</p>
			</li>
		</ul>
	</div>
	<div>
		<Icon icon="akar-icons:phone" />
		<h3>Phone</h3>
		<p>(714) 253 2851</p>
	</div>
	<div>
		<Icon icon="akar-icons:network" />
		<h3>Social</h3>
		<ul>
			<li>
				<strong>Instagram</strong>
				<p><a href="https://instagram.com/tinylittleyorkie">@TinyLittleYorkie</a></p>
			</li>
			<li>
				<strong>Yelp</strong>
				<p><a href="https://www.yelp.com/biz/tiny-little-paws-pet-grooming-chino-hills">Tiny Little Paws Pet Grooming, Chino Hills</a></p>
			</li>
		</ul>
	</div>
</section>

<style>
	h1 {
		width: 100%;
		text-align: center;
	}
	h3 {
		margin-bottom: 1rem;
	}
	p {
		font-size: 1.125rem;
		margin: 0;
	}
	div {
		flex: 1;
		min-width: 260px;
		padding: 1rem;
		padding: 2rem;
		border-radius: 1rem;
		border: 1px solid #f2f2f2;
		& svg {
			width: 36px;
			height: 36px;
			margin-bottom: 1rem;
		}
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		& li {
			margin-bottom: 0.5rem;
		}
	}
</style>
