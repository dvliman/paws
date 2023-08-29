<script>
	import Services from './services/+page.svelte';
</script>

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
			<a href="/instagram">pictures of various haircuts and styles</a> so you know what to expect.
		</p>
	</div>
	<div>
		<!-- image -->
	</div>
</section>

<!--make this 2 or 3 columns? should remove some? takes up vertical space too much-->
<Services />

<style>
	h1 {
		border: 0;
		margin-bottom: 1.5rem;
	}
	section {
		& div:first-child {
			width: 50%;
		}
		& div:last-child {
			width: 50%;
			height: 120px;
			background: gray;
		}
	}
</style>
