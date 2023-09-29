<script>
	import Icon from "@iconify/svelte";
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="Contact Us" description="Call us at (714) 253-2851 or (949) 372-8480" />

<section>
  <h1>Contact us</h1>
  <div>
    <Icon icon="akar-icons:location" />
    <h3>Location</h3>
    <p>Cross street of <strong>Butterfield Ranch Rd</strong> and <strong>Pine Ave</strong> in <strong>Chino Hills, CA</strong></p>
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
    <ul>
      <li>
        <strong>(714) 253-2851 - David</strong>
        <p>Text and Call</p>
      </li>
      <li>
        <strong>(949) 372-8480 - Fiona</strong>
        <p>Text only</p>
      </li>
    </ul>
  </div>
  <div>
    <Icon icon="akar-icons:network" />
    <h3>Social</h3>
    <ul>
      <li>
        <strong>Instagram</strong>
        <p><a href="https://instagram.com/tinylittlepawsla">@TinyLittlePawsLA</a></p>
      </li>
      <li>
        <strong>Yelp</strong>
        <p><a href="https://www.yelp.com/biz/tiny-little-paws-dog-grooming-services-chino-hills">Tiny Little Paws Dog Grooming Services, Chino Hills</a></p>
      </li>
    </ul>
  </div>
	<h1>Contact us</h1>
	<div>
		<Icon icon="akar-icons:location" />
		<h3>Location</h3>
		<p>Cross street of Butterfield Ranch Rd and Pine Ave in Chino Hills, CA</p>
	</div>
	<div>
		<Icon icon="akar-icons:clock" />
		<h3>Hours</h3>
		<ul>
			<li>
				<strong>Monday</strong>
				<p>8:00 am - 5:00 pm</p>
			</li>
			<li>
				<strong>Tuesday</strong>
				<p>8:00 am - 5:00 pm</p>
			</li>
			<li>
				<strong>Wednesday</strong>
				<p>8:00 am - 5:00 pm</p>
			</li>
			<li>
				<strong>Thursday</strong>
				<p>8:00 am - 5:00 pm</p>
			</li>
			<li>
				<strong>Friday</strong>
				<p>8:00 am - 5:00 pm</p>
			</li>
			<li>
				<strong>Saurday</strong>
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
		<ul>
			<li>
				<strong>(714) 253-2851</strong>
				<p>Text and Call</p>
			</li>
			<li>
				<strong>(949) 372-8480</strong>
				<p>Text only</p>
			</li>
		</ul>
	</div>
	<div>
		<Icon icon="akar-icons:network" />
		<h3>Social</h3>
		<ul>
			<li>
				<strong>Instagram</strong>
				<p><a href="https://instagram.com/tinylittlepawsla">@TinyLittlePawsLA</a></p>
			</li>
			<li>
				<strong>Yelp</strong>
				<p><a href="https://www.yelp.com/biz/tiny-little-paws-dog-grooming-services-chino-hills">Tiny Little Paws Dog Grooming Services, Chino Hills</a></p>
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
