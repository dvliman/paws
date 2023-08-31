<script>
	import Services from './services/+page.svelte';
	import Tiny from '$lib/assets/tiny.png';
	import TinyOpenGraph from '$lib/assets/tiny-open-graph.png';
	import { MetaTags, JsonLd } from 'svelte-meta-tags';
	console.log(TinyOpenGraph);
</script>

<MetaTags
	title="Welcome"
	titleTemplate="%s | Tiny Little Paws Pet Grooming"
	description="Pet Grooming Services in Chino Hills, CA"
	canonical="https://tinylittlepaws.com"
	openGraph={{
		type: 'website',
		url: 'https://tinylittlepaws.com/',
		locale: 'en-US',
		title: 'Tiny Little Paws Pet Grooming',
		description: 'Pet Grooming Services in Chino Hills, CA',
		images: [
			{
				url: TinyOpenGraph,
				secureUrl: TinyOpenGraph,
        alt: 'Tiny Little Paws Pet Grooming',
        width: 800,
        height: 600,
        type: 'image/png'
			}
		]
	}}
/>

<JsonLd
	schema={[
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			'@id': 'https://tinylittlepaws.com/#organization',
  		url: 'https://tinylittlepaws.com',
			name: 'Tiny Little Paws Pet Grooming',
			description: 'Pet Grooming Services in Chino Hills, CA 91709',
			logo: 'https://tinylittlepaws.com/favicon.png',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'San Bernandino',
				addressRegion: 'CA',
				postalCode: '91709',
				streetAddress: '16561 China Berry Ct, Chino Hills, CA 91709'
			},
			email: 'hello@tinylittlepaws.com',
			telephone: '(714) 253-2851',
			sameAs: 'https://www.yelp.com/biz/tiny-little-paws-pet-grooming-chino-hills'
		}
	]}
/>
<section>
	<div>
		<h1>Welcome to Tiny Little Paws!</h1>
		<p>
			Hi there! My name is Fiona. My husband and I run a pet grooming service out of our Chino Hills
			(California) home. Finding a groomer can be tricky, so we want you to feel comfortable with
			us.
			<br /><br />
			That is why we put together this website to give you a good idea of
			<a href="/about-us">who we are</a>
			and what we do. Here you can find all our contact information, details about our
			<a href="/services">services</a>
			and <a href="/policies">policies</a>, a complete breakdown of <a href="/services">pricing</a>,
			and
			<a href="/gallery">pictures of various haircuts and styles</a> so you know what to expect.
		</p>
	</div>
	<div>
		<img src={Tiny} alt="little tiny" />
	</div>
</section>

<Services />

<style>
	h1 {
		border: 0;
		margin-bottom: 1.5rem;
	}
	section {
		align-items: center;
		padding-bottom: 0;
		flex-direction: column;
		@media (min-width: 798px) {
			flex-direction: row;
		}
		& div {
			flex: 1;
			&:last-child {
				background: #ffe5ec;
				transform: scale(0.8);
				border-radius: 50%;
				aspect-ratio: 1 / 1;
				order: -1;
				@media (min-width: 798px) {
					order: 1;
				}
				& img:last-child {
					border-radius: 50%;
					margin: 0;
					display: block;
				}
			}
		}
	}
</style>
