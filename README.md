# frustum-culling

This application adds 2000 3d boxes to the scene on random lat/Lngs.
When having no 3D boxes within the viewport, the renderer should not be doing any drawcalls to the 3D boxes. They should be clipped by frustum culling.

But when checking how many drawcalls are made by the renderer, it says that more than 1000 drawcalls are made when zoomed in max and 0 boxes are within the viewport.  This indicates that atleast half of the maps worldspace is being rendered even if the objects are outside of the viewport and this will drastically decrease the performance.

To reproduce issue:

Follow below steps:

-npm install
-npm run dev
-Open chrome devtools and add live expressions to below 2 rows:

window.__GLOBALS__.overlay.renderer.info.render
window.__GLOBALS__.map.getZoom()

- all objects (2000) are being rendered when on zoomLevel 1
- atleast 1000 objects are still being rendered when on zoomlevel 22-4

When 0 boxes are within viewport, there should be 0 renderer calls but the calls never go below 1000.
