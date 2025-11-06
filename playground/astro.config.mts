import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import ectwoslash from "@arkts/twoslash-expressive-code";
import etsTmLanguageJson from './ets.tmLanguage.json';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Starlight",
			expressiveCode: {
				plugins: [
					ectwoslash(),
				],

				shiki: {
					langs: [
						'ts', 
						{
							...etsTmLanguageJson as any,
							name: 'ets',
							aliases: ['arkts'],
						}
					],
				}
			}
		}),
	],
});
