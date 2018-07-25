export default ({markup,state}) => {

    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Reactube</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        </head>
        <body>
               <div id="root">${markup}</div>
               ${state}
          <script type="text/javascript" src="http://localhost:3000/bundle.js"> 
       </script>
        </body>
      </html>` 
      
};