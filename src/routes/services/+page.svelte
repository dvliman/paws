<section>
	<div class="pricing-container">
		<div class="pricing">
			<h2>Bath Only</h2>
			<ul>
				<li>
					<div>Up to 20 lbs</div>
					<div>$40</div>
				</li>
				<li>
					<div>21 - 40 lbs</div>
					<div>$50</div>
				</li>
				<li>
					<div>41 - 60 lbs</div>
					<div>$60</div>
				</li>
				<li>
					<div>61 - 80 lbs</div>
					<div>$70</div>
				</li>
				<li>
					<div>81 lbs & up lbs</div>
					<div>$80</div>
				</li>
			</ul>
		</div>
		<div class="pricing">
			<h2>Bath + Haircut</h2>
			<ul>
				<li>
					<div>Up to 20 lbs</div>
					<div>$75</div>
				</li>
				<li>
					<div>21 - 40 lbs</div>
					<div>$85</div>
				</li>
				<li>
					<div>41 - 60 lbs</div>
					<div>$95</div>
				</li>
				<li>
					<div>61 - 80 lbs</div>
					<div>$105</div>
				</li>
				<li>
					<div>81 lbs & up lbs</div>
					<div>$115</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="package-container">
		<h2>Grooming package include</h2>
		<div>
			<ul>
				<li>Ears cleaned</li>
				<li>Hair inside the ear, outside of the canal plucked, if necessary.</li>
				<li>Nails trimmed</li>
				<li>
					Bath, using the specialized shampoo and conditioner for your pets skin and coat condition.
				</li>
			</ul>
			<ul>
				<li>Anal glands expression (upon request)</li>
				<li>Fluff drying – for a better finish</li>
				<li>Brush Out</li>
				<li>Sanitary area clipped</li>
				<li>Pads of feed clipped, cleaned and trimmed</li>
				<li>Haircut with hand scissor finish, on every dog</li>
			</ul>
		</div>
	</div>
</section>

<style>
	section {
		gap: 2rem;
		padding-bottom: 2rem;
		flex-flow: column;
		& .pricing-container {
			display: flex;
			gap: 2rem;
		}
		& .package-container {
			padding: 2rem;
			border-radius: 1rem;
			border: 1px solid #ffe5ec;
			& div {
				display: flex;
				gap: 2rem;
				& ul {
					flex: 1;
					list-style: circle;
					& li {
					}
				}
			}
		}
	}
	.pricing {
		width: 50%;
		background: #ffe5ec;
		padding: 2rem;
		border-radius: 1rem;
	}
	h2 {
		margin-bottom: 1.5rem;
		padding: 0;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		& li {
			display: flex;
			justify-content: space-between;
			font-size: 1.25rem;
		}
	}
</style>
