<script lang="ts">
  import Analytics from '$lib/analytics.svelte'
  import Instagram from '$lib/assets/instagram.png'
  import Whatsapp from '$lib/assets/whatsapp.png'
  import Yelp from '$lib/assets/yelp.png'
  import Phone from '$lib/assets/phone.png'
</script>

<section>
    <span>Home-based Pet Grooming Service</span>
    •
    <span>16561 China Berry Ct, Chino Hills, CA</span>
    •
    <span>(840) 212-9605</span>
    <a href="tel:8402129605"><img src={Phone} alt="Phone (840) 212-9605"></a>
    <a href="tel:8402129605"><img src={Whatsapp} alt="Whatsapp (840) 212-9605"></a>
    <a href="tel:8402129605"><img src={Yelp} alt="Yelp Tiny Little Paws"></a>
    <a href="tel:8402129605"><img src={Instagram} alt="Instagram Tiny Little Paws"></a>
</section>

<nav>
    <a href="/">Home</a>
    <a href="/about-us">About Us</a>
    <a href="/services">Services</a>
    <a href="/policies">Policies</a>
    <a href="/faq">F.A.Q</a>
    <a href="/contact-us">Contact Us</a>
</nav>

<Analytics/>
<slot/>

<footer>
© 2023 Tiny Little Paws
</footer>


