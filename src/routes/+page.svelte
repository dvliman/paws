<script>
  import Welcome from '$lib/components/Welcome.svelte';
  import Services from '$lib/components/Services.svelte';
  import Discounts from '$lib/components/Discounts.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  
  import TinyOpenGraph from '$lib/assets/tiny-open-graph.png';
  import { MetaTags, JsonLd } from 'svelte-meta-tags';
</script>

<MetaTags
  title="Dog Grooming Services in Chino Hills"
  description="Dog Grooming near Chino Hills, Chino, Pomona, Eastvale, Corona, Ontario. We are a low-volume boutique home-based grooming salon. We take time to do the grooming"
  canonical="https://tinylittlepaws.com"
  openGraph={{
    url: 'https://tinylittlepaws.com/',
    type: 'website',
    title: 'Tiny Little Paws Dog Grooming',
    description: 'Dog Grooming Services in Chino Hills, CA',
    locale: 'en_US',
    siteName: 'Tiny Little Paws',
    images: [
      {
        url: TinyOpenGraph,
        secureUrl: TinyOpenGraph,
        alt: 'Tiny Little Paws Dog Grooming',
        type: 'image/png',
        width: 256,
        height: 256
      }
    ]
  }}
  twitter={{
    site: '@site',
    cardType: 'summary_large_image',
    title: 'Tiny Little Paws Dog Grooming',
    description: 'Dog Grooming Services in Chino Hills, CA',
    image: 'https://tinylittlepaws.com/_app/immutable/assets/tiny.8ce336eb.png',
    imageAlt: 'Tiny Little Paws Dog Grooming'
  }}
/>

<JsonLd
  schema={[
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://tinylittlepaws.com/#organization',
      url: 'https://tinylittlepaws.com',
      name: 'Tiny Little Paws Dog Grooming',
      description: 'Dog Grooming Services in Chino Hills, CA 91709',
      logo: 'https://tinylittlepaws.com/favicon.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Bernandino',
        addressRegion: 'CA',
        postalCode: '91709',
        streetAddress: 'Cross s'
      },
      email: 'hello@tinylittlepaws.com',
      telephone: '(714) 253-2851',
      sameAs: 'https://www.yelp.com/biz/tiny-little-paws-dog-grooming-services-chino-hills'
    }
  ]}
/>

<Welcome />
<Services />
<Discounts />
<Testimonials />

