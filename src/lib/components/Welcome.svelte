<script>
  import Tiny from '$lib/assets/tiny.png';
</script>

<section>
  <div>
    <h1>Welcome to Tiny Little Paws!</h1>
    <p>
      Hi there! My name is Fiona. My husband and I run a dog grooming service out of our Chino Hills
       home. Finding a groomer can be tricky, so we want you to feel comfortable with
      us.
      <br /><br />
      That is why we put together this website to give you a good idea of
      <a href="/about-us">who we are</a>
      and what we do. Here you can find all our contact information, details about our
      <a href="/services">services</a>
      and <a href="/policies">policies</a>, a complete breakdown of <a href="/services">pricing</a>,
      and
      <a href="/gallery">pictures of various haircuts and styles</a> so you know what to expect.
    </p>
  </div>
  <div>
    <img src={Tiny} alt="Tiny Little Paws Dog Grooming" />
  </div>
</section>

<style>
  h1 {
    border: 0;
    margin-bottom: 1.5rem;
  }
  section {
    align-items: center;
    padding-bottom: 0;
    flex-direction: column;
    @media (min-width: 798px) {
      flex-direction: row;
    }
    & div {
      flex: 1;
      &:last-child {
        background: #ffe5ec;
        transform: scale(0.8);
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        order: -1;
        @media (min-width: 798px) {
          order: 1;
        }
        & img:last-child {
          border-radius: 50%;
          margin: 0;
          display: block;
        }
      }
    }
  }
</style>
