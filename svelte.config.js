import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		files: {
			lib: './src/lib/'
		},
		vite: {
      build: {
        rollupOptions: {
          output: {
            // Add a Content Security Policy (CSP) header with the most permissive settings.
            // This is NOT recommended for production use.
            intro: `
              <meta http-equiv="Content-Security-Policy" content="
                default-src *;
                script-src * 'unsafe-inline' 'unsafe-eval';
                style-src * 'unsafe-inline';
                img-src * data:;
                font-src *;
                media-src *;
                connect-src *;
                frame-src *;
                object-src *;
                base-uri *;
                form-action *;
                frame-ancestors *;
              ">
            `,
          },
        },
      },
    },
	}
};

export default config;
