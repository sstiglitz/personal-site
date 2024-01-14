// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_main_slug_ from "./routes/(main)/[slug].tsx";
import * as $_main_layout from "./routes/(main)/_layout.tsx";
import * as $_main_blog_slug_ from "./routes/(main)/blog/[slug].tsx";
import * as $_main_blog_index from "./routes/(main)/blog/index.tsx";
import * as $_main_index from "./routes/(main)/index.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";

import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/(main)/[slug].tsx": $_main_slug_,
    "./routes/(main)/_layout.tsx": $_main_layout,
    "./routes/(main)/blog/[slug].tsx": $_main_blog_slug_,
    "./routes/(main)/blog/index.tsx": $_main_blog_index,
    "./routes/(main)/index.tsx": $_main_index,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
