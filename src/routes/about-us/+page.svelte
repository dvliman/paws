<script>
	import Fiona from '$lib/assets/about/fiona.jpeg';
	import Tiny from '$lib/assets/about/tiny.jpeg';
	import Taco from '$lib/assets/about/taco.jpeg';
	import Nino from '$lib/assets/about/nino.jpeg';
</script>

<section class="intro">
	<h1>About us</h1>
	<p>
		Tiny Little Paws is a home-based pet grooming service in Chino Hills, CA. I work Monday through
		Saturday (half-day Saturday). I went to grooming school and got certified at American Dog
		Grooming Academy in Temecula, California under the apprentice of Angela Clark.
	</p>
</section>

<section class="stack-vertical">
	<h2>Meet our Team</h2>
	<div class="profile-container">
		<div class="profile-card">
			<img src={Fiona} alt="Fiona" />
			<h3>Fiona L</h3>
			<p>My name Fiona L and I am your groomer</p>
		</div>
		<div class="profile-card">
			<img src={Tiny} alt="Tiny" />
			<h3>Tiny</h3>
			<p style="margin-bottom: .5rem">
				Alerting of new occurennces & very supportive in every way. The bread & butter of the
				operation.
			</p>
			<a href="https://www.instagram.com/tinylittleyorkie/">@tinylittleyorkie</a>
		</div>
		<div class="profile-card">
			<img src={Taco} alt="Tacco" />
			<h3>Taco</h3>
			<p>Very experienced, full of energy, go-getter! Loves attention.</p>
		</div>
		<div class="profile-card">
			<img src={Nino} alt="Nino" />
			<h3>Nino</h3>
			<p>Love to socialize whether he is invited or not</p>
		</div>
	</div>
</section>

<style>
	h3 {
		margin-bottom: 1rem;
	}
	.intro {
		background: rgb(255, 71, 126);
		background: linear-gradient(45deg, rgba(255, 71, 126, 1) 0%, rgba(255, 112, 150, 1) 100%);
		border-radius: 0 0 2rem 2rem;
		align-items: last baseline;
		gap: 1rem;
		flex-direction: column;
		@media (min-width: 798px) {
			flex-direction: row;
			gap: 4rem;
		}
		& h1 {
			flex: 1;
			color: white;
			white-space: nowrap;
		}
		& p {
			flex: 2;
			color: white;
		}
	}
	.profile-container {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 2rem;
		& div {
			flex: 1;
			min-width: 240px;
		}
		& p {
			margin: 0;
		}
		& h4 {
			margin-bottom: 0.5rem;
		}
	}
	.profile-card {
		display: flex;
		flex-flow: column nowrap;
		padding: 2rem;
		border-radius: 1rem;
		border: 1px solid #f2f2f2;
		& img {
			width: 200px;
			height: 200px;
			object-fit: cover;
			border-radius: 50%;
		}
	}
</style>
