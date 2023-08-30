<script>
	import Analytics from '$lib/analytics.svelte';
	import '../global.css';
	import Icon from '@iconify/svelte';

	let openOrClosed;
	switch(new Date().getDay()) {
		case 0: 
			openOrClosed = "Sorry, we are closed today";
			break;
		case 6:
			openOrClosed = "We are open half-day today from 8:00 a.m. to 12:00 p.m";
			break;
		default:
			openOrClosed = "We are open today from 8:00 a.m. to 6:00 p.m";
	}
</script>

<section>
	<div class="container">
		<div class="info">
			<span>{openOrClosed}</span>
			<span>•</span>
			<span><a href="https://goo.gl/maps/L3F6odaLxD8dv9jFA">16561 China Berry Ct, Chino Hills, CA</a></span>
			<span>•</span>
			<span><a href="tel:+19493728480">(949) 372-8480</a></span>
		</div>
		<div class="social">
			<a href="tel:+19493728480"><Icon icon="akar-icons:phone" color="black" width="20" height="20" /></a>
			<a href="https://wa.me/19493728480?text=Can%20I%20schedule%20an%20appointment%3F"><Icon icon="akar-icons:whatsapp-fill" color="black" width="20" height="20" /></a>
			<a href="https://www.yelp.com/biz/tiny-little-paws-pet-grooming-chino-hills"><Icon icon="akar-icons:circle" color="black" width="20" height="20" /></a>
			<a href="https://instagram.com/tinylittlepaws_grooming"><Icon icon="akar-icons:instagram-fill" color="black" width="20" height="20" /></a>
		</div>
	</div>
</section>

<nav>
	<a href="/">Home</a>
	<a href="/about-us">About Us</a>
	<a href="/services">Services</a>
	<a href="/policies">Policies</a>
	<a href="/gallery">Gallery</a>
	<a href="/faq">F.A.Q</a>
	<a href="/contact-us">Contact Us</a>
</nav>

<Analytics />
<main>
	<slot />
</main>

<footer>© 2023 Tiny Little Paws</footer>

<style>
	section {
		padding: 0;
		width: 100%;
		background: #ffe5ec;
		align-items: center;
		justify-content: space-between;
		margin: 0;
		& .container {
			max-width: 1280px;
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin: 0 auto;
			padding: 0.75rem 4rem;
		}
	}
	.info {
		display: flex;
		gap: 0.5rem;
		font-size: 0.875rem;
	}
	.social {
		display: flex;
		gap: 1rem;
		& a {
			display: flex;
		}
	}

	nav {
		display: flex;
		width: 100%;
		padding: 1rem 2rem;
		justify-content: center;
		margin: 0;
		position: sticky;
		top: 0;
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(20px);
		& a {
			color: black;
			text-decoration: none;
			margin: 0 1rem;
			&:hover {
				color: #fb6f92;
			}
		}
	}

	main {
		max-width: 1280px;
		margin: 0 auto;
	}

	footer {
		display: flex;
		padding: 1rem 1.5rem;
		justify-content: center;
	}
</style>
