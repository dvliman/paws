<script>
	import Icon from "@iconify/svelte";
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="Contact Us - Dog Grooming Chino Hills" description="Call or text us. David at (714) 253-2851 and Fiona at (949) 372-8480. Or you can book appointment, we will follow up with questions" />

<section>
	<h1>Contact us</h1>
	<div>
		<Icon icon="akar-icons:location" />
		<h3>Location</h3>
		<!-- <p>Cross street of Butterfield Ranch Rd and Pine Ave in Chino Hills, CA</p> -->
		<p><a 
			on:click={() => track('contact:address')}
			class="address" href="https://www.google.com/maps/place/16561+China+Berry+Ct,+Chino+Hills,+CA+91709/@33.952762,-117.6871936,17z/data=!3m1!4b1!4m6!3m5!1s0x80dccc53e01b3dcf:0xe6fa5c3cfa8875b6!8m2!3d33.952762!4d-117.6846187!16s%2Fg%2F11crqhl21y?entry=ttu">
			16561 China Berry Ct, Chino Hills, CA 91709</a></p>
	</div>
	<div>
		<Icon icon="akar-icons:clock" />
		<h3>Hours</h3>
		<ul>
			<li>
				<strong>Monday</strong>
				<p>9:00 am - 5:00 pm</p>
			</li>
			<li>
				<strong>Tuesday</strong>
				<p>9:00 am - 5:00 pm</p>
			</li>
			<li>
				<strong>Wednesday</strong>
				<p>9:00 am - 5:00 pm</p>
			</li>
			<li>
				<strong>Thursday</strong>
				<p>9:00 am - 5:00 pm</p>
			</li>
			<li>
				<strong>Friday</strong>
				<p>9:00 am - 5:00 pm</p>
			</li>
			<li>
				<strong>Saurday</strong>
				<p>Closed</p>
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
		<ul>
			<li>
			    <a
          on:click={() => track('contact:david')}
          href="sms:+17142532851?&body=Can I schedule an appointment? My dog's weight is"
          >(714) 253-2851</a>
			</li>
			<li>
				<a
				on:click={() => track('contact:fiona')}
				href="sms:+19493728480?&body=Can I schedule an appointment? My dog's weight is"
				>(949) 372-8480</a>
			</li>
		</ul>
	</div>
	<div>
		<Icon icon="akar-icons:network" />
		<h3>Social</h3>
		<ul>
			<li>
				<strong>Instagram</strong>
				<p><a 
					on:click={() => track('contact:instgram')}
					href="https://instagram.com/tinylittlepawsla">@TinyLittlePawsLA</a></p>
			</li>
			<li>
				<strong>Yelp</strong>
				<p><a 
					on:click={() => track('contact:yelp')}
					href="https://www.yelp.com/biz/tiny-little-paws-dog-grooming-services-chino-hills">Tiny Little Paws Dog Grooming Services, Chino Hills</a></p>
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
