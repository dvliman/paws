<script>
  import Fiona from '$lib/assets/about/fiona.jpeg';
  import Tiny from '$lib/assets/about/tiny.jpeg';
  import Taco from '$lib/assets/about/taco.jpeg';
  import Nino from '$lib/assets/about/nino.jpeg';
  import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="About Us" description="Home based pet grooming service in Chino Hills, CA. Not mobile" />

<section class="intro">
  <h1>About us</h1>
  <p>
    Tiny Little Paws is a home-based pet grooming service in Chino Hills, CA. I went to grooming school and got certified at American Dog
    Grooming Academy in Temecula, California under the apprentice of Angela Clark.
  </p>
  <p>
    We offer dog grooming services in the Chino Hills area. We are a low-volume home-based boutique grooming salon. We take time to do the grooming. As a result, grooming would be a much less stressful experience for your pets. We prioritize taking care and attention to your dog.
  </p>
</section>

<section class="stack-vertical">
  <h2>Meet our Team</h2>
  <div class="profile-container">
    <div class="profile-card">
      <img src={Fiona} alt="Fiona" />
      <h3>Fiona L</h3>
      <p>I am your groomer</p>
    </div>
    <div class="profile-card">
      <img src={Tiny} alt="Tiny" />
      <h3>Tiny</h3>
      <p style="margin-bottom: .5rem">
        The bread & butter of the operation.
      </p>
      <a href="https://www.instagram.com/tinylittleyorkie/">@tinylittleyorkie</a>
    </div>
    <div class="profile-card">
      <img src={Taco} alt="Tacco" />
      <h3>Taco</h3>
      <p>Full of energy, go-getter! Loves attention.</p>
    </div>
    <div class="profile-card">
      <img src={Nino} alt="Nino" />
      <h3>Nino</h3>
      <p>Love to socialize whether he is invited or not</p>
    </div>
  </div>
</section>

<style>
  h3 {
    margin-bottom: 1rem;
  }
  .intro {
    background: rgb(255, 71, 126);
    background: linear-gradient(45deg, rgba(255, 71, 126, 1) 0%, rgba(255, 112, 150, 1) 100%);
    border-radius: 0 0 2rem 2rem;
    gap: 1rem;
    flex-direction: column;
    @media (min-width: 798px) {
      flex-direction: row;
      gap: 4rem;
    }
    & h1 {
      flex: 1;
      color: white;
      white-space: nowrap;
    }
    & p {
      flex: 2;
      color: white;
    }
  }
  .profile-container {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 2rem;
    & div {
      flex: 1;
      min-width: 240px;
    }
    & p {
      margin: 0;
    }
    & h4 {
      margin-bottom: 0.5rem;
    }
  }
  .profile-card {
    display: flex;
    flex-flow: column nowrap;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid #f2f2f2;
    & img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
</style>
