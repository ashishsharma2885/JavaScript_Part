// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})();  // aise situation me semicolon lagana hai tbhi niche wala run hoga

( (name) => {
    console.log(`DB CONNECTED TWO${name}`)
}) (' Ashish ')