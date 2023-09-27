<script>
  import Analytics from '$lib/analytics.svelte';
  import '../global.css';
  import Icon from '@iconify/svelte';

  let openOrClosed;
  switch (new Date().getDay()) {
    case 0:
      openOrClosed = 'Sorry, we are closed today';
      break;
    case 6:
      openOrClosed = 'We are open half-day today from 8:00 a.m. to 12:00 p.m';
      break;
    default:
      openOrClosed = 'We are open today from 8:00 a.m. to 5:00 p.m';
  }

  let show = false;
  function toggle() {
    show = !show;
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<svelte:head>
  <script>
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );
    fbq('init', '826349535656951');
    fbq('track', 'PageView');
  </script>
  <noscript
    ><img
      height="1"
      width="1"
      style="display:none"
      src="https://www.facebook.com/tr?id=826349535656951&ev=PageView&noscript=1" /></noscript>
</svelte:head>

<section>
  <div class="container">
    <div class="info">
      <span class="hide-in-mobile">{openOrClosed}</span>
      <span class="hide-in-mobile">•</span>
      <span class="hide-in-mobile">
        Cross street of <strong>Butterfield Ranch Rd</strong> and
        <strong>Pine Ave</strong> in Chino Hills
      </span>
      <span class="hide-in-mobile">•</span>
      <span
        ><a href="sms:+17142532851?&body=Can I schedule an appointment?"
          >(714) 253-2851</a>
        or
        <a href="sms:+19493728480?&body=Can I schedule an appointment?"
          >(949) 372-8480</a
        ></span>
    </div>
    <div class="social">
      <a href="tel:+17142532851">
        <Icon icon="akar-icons:phone" color="black" width="20" height="20" />
      </a>
      <a
        href="https://wa.me/17142532851?text=Can%20I%20schedule%20an%20appointment%3F">
        <Icon
          icon="akar-icons:whatsapp-fill"
          color="black"
          width="20"
          height="20" />
      </a>
      <a
        href="https://www.yelp.com/biz/tiny-little-paws-dog-grooming-services-chino-hills">
        <Icon icon="simple-icons:yelp" color="black" width="20" height="20" />
      </a>
      <a href="https://instagram.com/tinylittlepawsla">
        <Icon
          icon="akar-icons:instagram-fill"
          color="black"
          width="20"
          height="20" />
      </a>
    </div>
  </div>
</section>

<nav>
  <button on:click={toggle}>
    <Icon icon="akar-icons:three-line-horizontal" />Menu</button>
  <div class="menu-items-mobile" class:hide={!show}>
    <a href="/" on:click={toggle}>Home</a>
    <a href="/about-us" on:click={toggle}>About Us</a>
    <a href="/services" on:click={toggle}>Services</a>
    <a href="/policies" on:click={toggle}>Policies</a>
    <a href="/gallery" on:click={toggle}>Gallery</a>
    <a href="/faq" on:click={toggle}>F.A.Q</a>
    <a href="/contact-us" on:click={toggle}>Contact Us</a>
    <a href="/booking" on:click={toggle}><strong>Book Now</strong></a>
  </div>
  <div class="menu-items-desktop">
    <a href="/">Home</a>
    <a href="/about-us">About Us</a>
    <a href="/services">Services</a>
    <a href="/policies">Policies</a>
    <a href="/gallery">Gallery</a>
    <a href="/faq">F.A.Q</a>
    <a href="/contact-us">Contact Us</a>
    <a href="/booking"><strong>Book Now</strong></a>
  </div>
</nav>

<Analytics />
<main>
  <slot />
</main>

<footer>
  <div>
    <h2>Tiny Little Paws</h2>
    <h2>Dog Grooming</h2>
    <address>
      <p>
        Cross street of <strong>Butterfield Ranch Rd</strong><br />and
        <strong>Pine Ave</strong> in Chino Hills
        <br />
        <i>(contact us to get the exact address)</i>
      </p>
      <div>
        David: <a class="phone-number" href="tel:+17142532851"
          >(714) 253-2851</a>
      </div>
      <div>
        Fiona: <a
          class="phone-number"
          href="sms:+19493728480?&body=Can I schedule an appointment?"
          >(949) 372-8480</a>
      </div>
    </address>
  </div>
  <div>
    <h3>Business hours</h3>
    <table>
      <tr>
        <td>Mon</td>
        <td>8:00 AM</td>
        <td>-</td>
        <td>5:00 PM</td>
      </tr>
      <tr>
        <td>Tue</td>
        <td>8:00 AM</td>
        <td>-</td>
        <td>5:00 PM</td>
      </tr>
      <tr>
        <td>Wed</td>
        <td>8:00 AM</td>
        <td>-</td>
        <td>5:00 PM</td>
      </tr>
      <tr>
        <td>Thu</td>
        <td>8:00 AM</td>
        <td>-</td>
        <td>5:00 PM</td>
      </tr>
      <tr>
        <td>Fri</td>
        <td>8:00 AM</td>
        <td>-</td>
        <td>5:00 PM</td>
      </tr>
      <tr>
        <td>Sat</td>
        <td>8:00 AM</td>
        <td>-</td>
        <td>12:00 PM</td>
      </tr>
      <tr>
        <td>Sun</td>
        <td>Closed</td>
      </tr>
    </table>
  </div>
  <div>
    <h3>Sitemap</h3>
    <ul>
      <li><a href="/" on:click={toggle}>Home</a></li>
      <li><a href="/about-us" on:click={toggle}>About Us</a></li>
      <li><a href="/services" on:click={toggle}>Services</a></li>
      <li><a href="/policies" on:click={toggle}>Policies</a></li>
      <li><a href="/gallery" on:click={toggle}>Gallery</a></li>
      <li><a href="/faq" on:click={toggle}>F.A.Q</a></li>
      <li><a href="/contact-us" on:click={toggle}>Contact Us</a></li>
      <li>
        <a href="/booking" on:click={toggle}><strong>Book Now</strong></a>
      </li>
    </ul>
  </div>
</footer>

<style>
  section {
    padding: 0;
    width: 100%;
    background: #ffe5ec;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    & .container {
      max-width: 1280px;
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 0 auto;
      padding: 0.75rem 2rem;

      & a {
        text-decoration: none;
        font-weight: bold;
      }
      @media (min-width: 798px) {
        padding: 0.75rem 4rem;
        justify-content: space-between;
      }
    }
  }
  .info {
    display: flex;
    gap: 0.5rem;
    font-size: 0.875rem;
    flex-flow: row;
  }
  .social {
    display: flex;
    gap: 1rem;
    display: none;

    @media (min-width: 798px) {
      display: flex;
    }
    & a {
      display: flex;
    }
  }
  nav {
    display: flex;
    width: 100%;
    padding: 1rem 2rem;
    justify-content: center;
    align-items: center;
    margin: 0;
    top: 0;
    position: sticky;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    z-index: 99;

    & .menu-items-mobile {
      display: flex;
      flex-flow: column;
      width: 100%;
      top: 64px;
      position: absolute;
      background: white;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      padding-bottom: 1.5rem;
      border-radius: 0 0 1rem 1rem;
      & a {
        color: black;
        text-decoration: none;
        margin: 0.5rem 1rem;
        font-weight: 300;
        text-align: center;
        font-size: 1.25rem;
        &:hover {
          color: #fb6f92;
        }
      }
    }
    & button {
      left: 50%;
      margin-left: -300px;
      background: none;
      color: var(--nc-tx-2);
      display: flex;
      align-items: left;
      gap: 0.5rem;
      font-weight: 500;
      & svg {
        width: 20px;
        height: 20px;
      }
      @media (min-width: 798px) {
        display: none;
      }
    }
    & .menu-items-desktop {
      display: none;
      @media (min-width: 798px) {
        display: flex;
      }
      & a {
        color: black;
        text-decoration: none;
        margin: 0rem 1rem;
        font-weight: 300;
        text-align: center;
        font-size: 1rem;
        &:hover {
          color: #fb6f92;
        }
      }
    }
  }
  main {
    max-width: 1280px;
    margin: 0 auto;
  }
  footer {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    max-width: 1280px;

    margin: 0 auto;
    display: flex;

    gap: 10px 10rem;
    & div {
      flex: 1;
    }

    & a {
      text-decoration: none;
    }
    & .phone-number {
      color: black;
      font-weight: bold;
    }
    @media (min-width: 798px) {
      gap: 2rem;
      padding: 0.75rem 4rem;
    }
    & i {
      font-size: 1rem;
    }

    & table,
    td {
      border: none;
    }
    & tr {
      background-color: transparent;
    }

    & ul {
      list-style: none;
      padding: 0;
    }
  }

  .hide-in-mobile {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }
  .hide {
    display: none !important;
  }
</style>
