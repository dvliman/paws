<section>
	<h1>Book an appointment today</h1>
	<div class="package-container">
		<a href="https://calendly.com/tinylittlepaws/bath-only">Bath Only</a>
	</div>
	<div class="package-container">
		<a href="https://calendly.com/tinylittlepaws/bath-haircut">Bath + Haircut</a>
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

</style>
