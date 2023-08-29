<script lang="ts">
  import Analytics from '$lib/analytics.svelte'
  import Instagram from '$lib/assets/instagram.png'
  import Whatsapp from '$lib/assets/whatsapp.png'
  import Yelp from '$lib/assets/yelp.png'
  import Call from '$lib/assets/call.png'
</script>

<section>
    <span>Home-based Pet Grooming Service</span>
    •
    <span>16561 China Berry Ct, Chino Hills, CA</span>
    •
    <span>(949) 372-8480</span>
    <a href="tel:9493728480"><img src={Call} alt="Call (949) 372-8480"></a>
    <a href="tel:9493728480"><img src={Whatsapp} alt="Whatsapp (949) 372-8480"></a>
    <a href="tel:9493728480"><img src={Yelp} alt="Yelp Tiny Little Paws"></a>
    <a href="tel:9493728480"><img src={Instagram} alt="Instagram Tiny Little Paws"></a>
</section>

<nav>
    <a href="/">Home</a>
    <a href="/about-us">About Us</a>
    <a href="/services">Services</a>
    <a href="/policies">Policies</a>
    <a href="/gallery">Gallery</a>
    <a href="/faq">F.A.Q</a>
    <a href="/contact-us">Contact Us</a>
</nav>

<Analytics/>
<slot/>

<footer>
© 2023 Tiny Little Paws
</footer>


