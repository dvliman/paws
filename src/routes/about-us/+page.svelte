<script>
	import Fiona from '$lib/assets/about/fiona.jpeg';
</script>

<section class="intro">
	<h1>About Us</h1>
	<p>
		Tiny Little Paws is a family-run home based pet grooming business in Chino Hills, CA. I work
		Tuesday through Saturday. I went to grooming school and got certified at American Dog Grooming
		Academy in Temecula, California under the apprentice of Angela Clark.
	</p>
</section>

<section class="stack-vertical">
	<h2>Meet our Team</h2>
	<div class="profile-container">
		<div class="profile">
			<img src={Fiona} alt="Fiona" />
			<h4>Fiona L</h4>
			<p>My name Fiona L and I am your groomer</p>
		</div>
		<div class="profile">
			<img src={Fiona} alt="Fiona" />
			<h4>Tiny</h4>
			<p style="margin-bottom: .5rem">
				Alerting of new occurennces & very supportive in every way. The bread & butter of the
				operation.
			</p>
			<a href="https://www.instagram.com/tinylittleyorkie/">@tinylittleyorkie</a>
		</div>
		<div class="profile">
			<img src={Fiona} alt="Fiona" />
			<h4>Taco</h4>
			<p>Very experienced, full of energy, go-getter! Loves attention.</p>
		</div>
		<div class="profile">
			<img src={Fiona} alt="Fiona" />
			<h4>Nino</h4>
			<p>Love to socialize whether he is invited or not</p>
		</div>
	</div>
</section>

<style>
	.intro {
		& h1 {
			flex: 0.5;
		}
		& p {
			flex: 1;
		}
	}
	.profile-container {
		display: flex;
		gap: 1rem;
		& div {
			flex: 1;
		}
		& p {
			margin: 0;
		}
		& h4 {
			margin-bottom: 0.5rem;
		}
	}
	.profile {
		display: flex;
		flex-flow: column nowrap;
		padding: 2rem;
		border-radius: 1rem;
		border: 1px solid #f2f2f2;
		box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.1);
		& img {
			width: 200px;
			height: 200px;
			object-fit: cover;
			border-radius: 50%;
		}
	}
</style>
