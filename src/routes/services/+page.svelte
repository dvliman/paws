<section>
	<div class="pricing-container">
		<div class="pricing">
			<h2>Bath Only</h2>
			<ul>
				<li>
					<div><span>Up to 20 lbs</span><span>Tiny dogs</span></div>
					<div class="price">$40</div>
				</li>
				<li>
					<div><span>21 - 40 lbs</span><span>Small dogs</span></div>
					<div class="price">$50</div>
				</li>
				<li>
					<div><span>41 - 60 lbs</span><span>Medium dogs</span></div>
					<div class="price">$60</div>
				</li>
				<li>
					<div><span>61 - 80 lbs</span><span>Large dogs</span></div>
					<div class="price">$70</div>
				</li>
				<li>
					<div><span>81 lbs & up</span><span>XLarge dogs</span></div>
					<div class="price">$80</div>
				</li>
			</ul>
		</div>
		<div class="pricing">
			<h2>Bath + Haircut</h2>
			<ul>
				<li>
					<div><span>Up to 20 lbs</span><span>Tiny dogs</span></div>
					<div class="price">$75</div>
				</li>
				<li>
					<div><span>21 - 40 lbs</span><span>Small dogs</span></div>
					<div class="price">$85</div>
				</li>
				<li>
					<div><span>41 - 60 lbs</span><span>Medium dogs</span></div>
					<div class="price">$95</div>
				</li>
				<li>
					<div><span>61 - 80 lbs</span><span>Large dogs</span></div>
					<div class="price">$105</div>
				</li>
				<li>
					<div><span>81 lbs & up</span><span>XLarge dogs</span></div>
					<div class="price">$115</div>
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
				<li>Anal glands expression (upon request)</li>
			</ul>
			<ul>
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
		flex-flow: column;
		& .pricing-container {
			display: flex;
			gap: 2rem;
		}
		& .package-container {
			padding: 2rem;
			border-radius: 1rem;
			border: 1px solid #000;
			& div {
				display: flex;
				gap: 2rem;
				& ul {
					flex: 1;
					& li {
						border-bottom: 1px solid #cccccc;
						padding-bottom: 0.5rem;
						margin: 0.5rem 0;
						&:last-child {
							border: none;
						}
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
		& li {
			background: white;
			padding: 1rem 1.5rem;
			border-radius: 0.5rem;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
			align-items: center;
			& div:first-child {
				display: flex;
				flex-flow: column nowrap;
				& span:last-child {
					font-size: 0.875rem;
					color: #999999;
				}
			}
		}
		& .price {
			font-size: 2.5rem;
		}
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
