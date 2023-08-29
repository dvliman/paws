<script>
    import Services from './services/+page.svelte'
</script>
<main>
    <h1>Welcome to Tiny Little Paws website!</h1>
    <p>
       Hi there! My name is Fiona. My husband and I run a pet grooming service out of our Chino Hills (California) home
    </p>
    <p>
        Finding a groomer can be tricky, so we want you to feel comfortable with us. That iss why we put together this website to give you a good idea of <a href="/about-us">who we are</a> and what we do.
    </p>
    <p>
        Here you can find all our contact information, details about our <a href="/services">services</a> and <a href="/policies">policies</a>, a complete breakdown of <a href="/services">pricing</a>, and <a href="/instagram">pictures of various haircuts and styles</a> so you know what to expect.
    </p>

    <!--make this 2 or 3 columns? should remove some? takes up vertical space too much-->
    <section>
       <Services/>
    </section>
</main>
