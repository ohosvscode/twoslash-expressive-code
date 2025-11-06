import { defineEcConfig } from "@astrojs/starlight/expressive-code";
import shikiColorizedBrackets from "./plugins/shiki-color-brackets/index.js";
import ectwoslash from "@arkts/twoslash-expressive-code";

export default defineEcConfig({
	plugins: [ectwoslash()],
	shiki: {
		transformers: [shikiColorizedBrackets()],
	},
});
