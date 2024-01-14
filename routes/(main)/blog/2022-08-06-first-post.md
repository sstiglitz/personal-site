---
title: First Post
date: 2022-08-06
type: blog
meta:
    title: first post | netsplit
    description: First blog post on the newly rebuilt site.
---

# First Post

I originally built my personal site on [dendron.so](https://www.dendron.so/),
but I wasn't happy with it. At the same time, I have been wanting to build a
site using [pico.css](https://picocss.com). So I finally go around to it - what
do you think?

Don't get me wrong, I like the Dendron project and I continue to use it for
documenting professional work. While I intended to use it more personally, it
never gained traction.

First, the format of a personal knowledge base didn't help me write. I started
the site to share more of my work, but was spending too much time attempting to
organize and curate topics. This left me not doing any actual writing.

Secondly, while Dendron has made great progress to make customizing the
published site, the underlying Ant framework is a woefully bad experience. It is
slow to load, some stylesheet flicker occurs, and I swear, the dropdown menusare
possesed by demons.

The last straw was when I was attempting to use the
[publish](https://wiki.dendron.so/notes/4ushYTDoX0TYQ1FDtGQSg/) command locally
one day. An error popped up that api.segment.io was unreachable. This is a
common error for me as I use pihole to block ads. Dendron clearly discloses
their use of telemetry, but it wasn't clear how to turn it off. I finally found
how buried as a sub-command to their `dev` command which is intended for
"commands related to development". After running
`dendron dev disable_telemetry`, running `dendron publish` worked once again.

This didn't give me a good feeling. First, not being able to reach a telemetry
vendor should not break your end-product. And second, disabling this setting was
undocumented and tucked into a strange location of the cli's API that is labeled
for develop only. The docs have since
[been updated](https://wiki.dendron.so/notes/84df871b-9442-42fd-b4c3-0024e35b5f3c/#how-to-opt-out-of-data-collection)
to clarify where the command is located.

I suppose that was enough to tip the scales and get started on a new version of
my site.

## Version 2.0

I have wanted to give pico.css a try due a great blend of minimalism,
functionality, and beauty. While not the smallest of the minimal css frameworks
available, it has grid, layout, and form features some others do not have.

I tend to use Hugo for static sites. Using
[this template](https://github.com/LukasJoswiak/etch) as inspiration, I set out
to recreate it from scratch using a combo of Hugo, Vite.js, and Pico.css. After
some hiccups getting Hugo and Vite.js to play nicely using
[this plugin](https://github.com/DcBD/vite-hugo-plugin), the rest was a breeze.

## Will it Work?

Well, now that I have a more traditional blogging site setup, hopefully I won't
have any more excuses and I'll actually write some posts. Fingers crossed.
