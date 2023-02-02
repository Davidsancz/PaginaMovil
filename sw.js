const staticache = "static";

const app_shell=[
    "/",
    "java.html",
    "style.css",
    "main.js",
    "aña.jpg"
];
self.addEventListener("install",(e)=>{
    const cachestatic = caches
        .open(staticache)
        .then((cache)=> cache.addAll(app_shell));

    e.waitUntil(cachestatic);
});
self.addEventListener("fetch",(e)=>{
    console.log("fetch!", e.request);
    e.responseWith(
        caches
            .match(e.request)
            .then(res => res || fetch(e.request))
            .catch(console.log)
    );
}); 