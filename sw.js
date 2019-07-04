self.addEventListener("fetch", event => console.log(`[ServiceWorker] Fetch ${event.request.url}`)) 



const offlineHTML = `

  <!DOCTYPE html>
  <html class="no-js">

  <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>GravityNull TeaKadai</title>
      <meta name="Tamil Flash News Web App" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>

  <style>
    body {
      font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
      margin: 2em;
    }

    h1 {
      font-style: italic;
      color: #373fff;
    }

    img{
      display:block;
      margin:auto;
    }
  </style>

  <body>
    <h1>You are offline :/ </h1>
  </body>

  </html>

`;


self.addEventListener("fetch", event => {

    event.respondWith(
        fetch(event.request)
        .catch( () => new Response(offlineHTML, { headers : {"Content-Type": "text/html;charset=utf-8"}}))
    );

});