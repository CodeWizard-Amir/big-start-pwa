self.addEventListener('install',()=>{
    console.log("service worker installing ...")
})
self.addEventListener('activate',()=>{
    console.log("activating ...")
})
self.addEventListener('fetch' , (event)=>{
    console.log("service worker is fetching ...", event)
})