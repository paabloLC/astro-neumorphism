import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import deno from '@astrojs/deno';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind({
		// Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    config: { applyBaseStyles: false },
	}), preact()],
	output: 'server',
  adapter: deno(),
});
