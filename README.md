# Mind Map

![](https://res.cloudinary.com/nogsantos/image/upload/v1546884215/MindMap/screenshot-nogsantos.github.io-2019.01.07-16-01-07.png)

## Setup

### Dependencies Install

```bash
$ npm i
```

### Run for dev env

A server on `http://localhost:2911/` and a watcher for changes will run.

```bash
$ npm run dev
```

### Run for dist

```bash
$ npm run build
```

### Gh-pages publish

To build and publish

```bash
$ npm run build-and-publish
```

Only to publish. The `dist` folder must be build before publish

```bash
$ npm run publish
```
## Notes

It is a fork from [tobloef](https://github.com/tobloef/text2mindmap)

> ## Text2MindMap
>
> An online tool for making mindmaps by writing indented lists.
>
> ## Please note
>
> The current version of the tool utilizes some minified JavaScript and CSS code from the original [Text2MindMap.com](http://www.text2mindmap.com), which I didn't personally write. This was originally just meant to be a quick hack for personal use, but seeing as this project has gotten a lot of interest, I'm currently working on replacing the old code with something I've written myself. This should let me properly license the code and later extend the functionality of the site. Stay tuned!
>
> A few months ago one of my favorite tools [Text2MindMap](http://www.text2mindmap.com) went down and since there doesn't seem to be any plans to bring it back up I created my own version of the site. It's basically just a quick mashup between some of the code from the original site and some code from my [Markdown Editor](https://tobloef.com/markant/), but I hope someone will find it as useful.
