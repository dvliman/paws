<script lang="ts">
  import Location from '$lib/assets/location.png'
  import Hours from '$lib/assets/hours.png'
  import Phone from '$lib/assets/phone.png'
  import Social from '$lib/assets/social.png'
</script>

<main>
    <div>
        <img src={Location} alt="Location">
        <strong>Location</strong>
        <span>16561 China Berry Ct, Chino Hills, CA 91709</span>
    </div>
    <div>
        <img src={Hours} alt="Hours">
        <strong>Hours</strong>
        <span>Tue - Sun | 9:00 am - 5:30 pm</span>
        <span>Mon | Closed </span>
    </div>
    <div>
        <img src={Phone} alt="Phone">
        <strong>Phone</strong>
        <span>(840) 212-9605</span>
    </div>
    <div>
        <img src={Social} alt="Social">
        <strong>Social</strong>
        <span>Instagram: @TinyLittlePaws</span>
        <span>Yelp: @TinyLittlePaws</span>
    </div>
</main>
