import { sentryRollupPlugin } from "@sentry/rollup-plugin";

//https://nitro.unjs.io/config
export default defineNitroConfig({
  sourceMap: true,
  srcDir: "server",
  plugins: [
    sentryRollupPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "REDACTED",
      project: "REDACTED",
    }),
  ],
});
