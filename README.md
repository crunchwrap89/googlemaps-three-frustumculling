# frustum-culling

This application adds 2000 boxes to the scene on random lat/Lngs.
Check console.log(this.renderer.info.render.calls) to see that half of them are always rendered,
atleast half of the boxes will be rendered even when zoomed in on max zoom level and 0 boxes are within viewport.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
