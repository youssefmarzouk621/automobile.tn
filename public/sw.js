/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

/*
var version = "v2.0.3";
var swPath;
var urlObject = new URL(location);
var host;
if (urlObject.searchParams.get("swPath")) {
  swPath = urlObject.searchParams.get("swPath");
} else {
  if (urlObject.searchParams.get("version")) {
    version = urlObject.searchParams.get("version");
  }
  if (urlObject.searchParams.get("swJSHost")) {
    host = "https://" + urlObject.searchParams.get("swJSHost");
  } else {
    host = "https://sdki.truepush.com/sdk/";
  }
  swPath = host + version + "/sw.js";
}
importScripts(swPath);*/

importScripts("/web-push/sw.js");
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: "fr/offline.html",
    revision: "1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

var networkFirstHandler = workbox.strategies.networkFirst({
  cacheName: "default",
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 10
    }),
    new workbox.cacheableResponse.Plugin({
      statuses: [200]
    })
  ]
});

var matcher = function(a) {
  return a.event.request.mode === "navigate";
};
var handler = function(args) {
  return networkFirstHandler.handle(args).then(function(response) {
    return !response ? caches.match("/fr/offline.html") : response;
  });
};

workbox.routing.registerRoute(matcher, handler);
