import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config: UserConfig = {
	plugins: [sveltekit()]
};

export default config;
