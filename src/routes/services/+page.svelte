<script>
  import { MetaTags } from 'svelte-meta-tags';
	import Services from "$lib/components/Services.svelte";
</script>

<section>
	<h1>Our Services</h1>
	<div class="pricing">
		<h2>Bath Only</h2>
		<ul>
			<li>
				<div><span>1 - 15 lbs</span><span>Tiny dogs</span></div>
				<div class="price">$35</div>
			</li>
			<li>
				<div><span>16 - 35 lbs</span><span>Small dogs</span></div>
				<div class="price">$45</div>
			</li>
			<li>
				<div><span>36 - 50 lbs</span><span>Medium dogs</span></div>
				<div class="price">$60</div>
			</li>
			<li>
				<div><span>51 - 75 lbs</span><span>Large dogs</span></div>
				<div class="price">$70</div>
			</li>
			<li>
				<div><span>76 lbs & up</span><span>XLarge dogs</span></div>
				<div class="price">$75</div>
			</li>
		</ul>
	</div>
	<div class="pricing">
		<h2>Bath + Haircut</h2>
		<ul>
			<li>
				<div><span>1 - 15 lbs</span><span>Tiny dogs</span></div>
				<div class="price">$55</div>
			</li>
			<li>
				<div><span>16 - 35 lbs</span><span>Small dogs</span></div>
				<div class="price">$65</div>
			</li>
			<li>
				<div><span>36 - 50 lbs</span><span>Medium dogs</span></div>
				<div class="price">$85</div>
			</li>
			<li>
				<div><span>51 - 75 lbs</span><span>Large dogs</span></div>
				<div class="price">$115</div>
			</li>
			<li>
				<div><span>76 lbs & up</span><span>XLarge dogs</span></div>
				<div class="price">$145</div>
			</li>
		</ul>
	</div>
	<div class="package-container">
		<h2>Grooming package include</h2>
		<div>
			<ul>
				<li>
					<Icon icon="akar-icons:circle-check" />Ears cleaning
				</li>
				<li>
					<Icon icon="akar-icons:circle-check" />Ear hair removal
				</li>
				<li>
					<Icon icon="akar-icons:circle-check" />Nail trimming
				</li>
				<li>
					<Icon icon="akar-icons:circle-check" />
					Bath using high-quality specialized shampoo
				</li>
				<li>
					<Icon icon="akar-icons:circle-check" />Anal glands expression
				</li>
				<li>
					<Icon icon="akar-icons:circle-check" />Fluff drying & brush out
				</li>
				<li>
					<Icon icon="akar-icons:circle-check" /> Sanitary area clipped
				</li>
				<li>
					<Icon icon="akar-icons:circle-check" />Paws pad trimming
				</li>
				<li>
					<Icon icon="akar-icons:cross" />Price does not include de-matting
				</li>
			</ul>
		</div>
	</div>
	<div>
		<h2>Add-on (à la carte) Services</h2>
		<ul>
			<li class="options">
				<div>Nail Trimming (1 - 40 lbs)</div>
				<div class="price">$15</div>
			</li>
			<li class="options">
				<div><span>Nail Trimming (40 lbs & up)</span></div>
				<div class="price">$20</div>
			</li>
			<li class="options">
				<div><span>Ear cleaning</span></div>
				<div class="price">$10</div>
			</li>
			<li class="options">
				<div><span>Anal Gland Expression</span></div>
				<div class="price">$10</div>
			</li>
			<li class="options">
				<div><span>Teeth brushing</span></div>
				<div class="price">$5</div>
			</li>
			<li class="options">
				<div><span>Flea & Tick bath</span></div>
				<div class="price">$10</div>
			</li>
			<li class="options">
				<div><span>Face trim</span></div>
				<div class="price">$10</div>
			</li>
			<li class="options">
				<div><span>Butt trim</span></div>
				<div class="price">$10</div>
			</li>
			<li class="options">
				<div><span>Paws trim</span></div>
				<div class="price">$5</div>
			</li>
			<li class="options">
				<div><span>Sanitary trim</span></div>
				<div class="price">$5</div>
			</li>
			<li class="options">
				<div><span>Brush & De-matting</span></div>
				<div class="price">$10 / 15 mins</div>
			</li>
			<li class="options">
				<div><span>De-shedding</span></div>
				<div class="price">$10 / 15 mins</div>
			</li>
			<li class="options">
				<div><span>De-greasy</span></div>
				<div class="price">$15</div>
			</li>
		</ul>
	</div>
</section>

<Services />