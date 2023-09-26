<script>
	import Icon from "@iconify/svelte";
</script>

<section>
	<h1>Our Services</h1>
	<div class="pricing">
		<h2>Bath Only</h2>
		<ul>
			<li>
				<div><span>Up to 20 lbs</span><span>Tiny dogs</span></div>
				<div class="price">$35</div>
			</li>
			<li>
				<div><span>21 - 40 lbs</span><span>Small dogs</span></div>
				<div class="price">$45</div>
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
				<div class="price">$75</div>
			</li>
		</ul>
	</div>
	<div class="pricing">
		<h2>Bath + Haircut</h2>
		<ul>
			<li>
				<div><span>Up to 20 lbs</span><span>Tiny dogs</span></div>
				<div class="price">$55</div>
			</li>
			<li>
				<div><span>21 - 40 lbs</span><span>Small dogs</span></div>
				<div class="price">$65</div>
			</li>
			<li>
				<div><span>41 - 60 lbs</span><span>Medium dogs</span></div>
				<div class="price">$85</div>
			</li>
			<li>
				<div><span>61 - 80 lbs</span><span>Large dogs</span></div>
				<div class="price">$115</div>
			</li>
			<li>
				<div><span>81 lbs & up</span><span>XLarge dogs</span></div>
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
					<Icon icon="akar-icons:cross" />Price does not include de-matting ($10 / 15 mins)
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	h1 {
		width: 100%;
		text-align: center;
	}
	section {
		gap: 2rem;
		& > div {
			flex: 1;
			min-width: 100%;
			@media (min-width: 798px) {
				min-width: 400px;
			}
		}
		& .package-container {
			padding: 2rem;
			border-radius: 1rem;
			border: 1px solid #000;
			& div {
				display: flex;
				flex-wrap: wrap;
				& ul {
					flex: 1;
					min-width: 100%;
					& li {
						border-bottom: 1px solid #cccccc;
						padding-bottom: 0.5rem;
						margin: 0.5rem 0;
						justify-content: flex-start;
						gap: 1rem;
						&:last-child {
							border: none;
						}
						& svg {
							flex-shrink: 0;
							width: 24px;
							height: 24px;
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
			justify-content: space-between;
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
			font-size: 1.75rem;
			@media (min-width: 798px) {
				font-size: 2.5rem;
			}
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
			align-items: center;
			font-size: 1.25rem;
		}
	}
</style>
