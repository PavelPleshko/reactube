const url = process.env.NODE_ENV === 'production' ? '' : `http://localhost:${process.env.PORT || 8080}`;
export default ({markup,state,materialCss,mainCss}) => {

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

                       <style id="jss-server-side">${materialCss}</style> 
                       <style>${mainCss}</style> 
                 

               ${state}
          <script type="text/javascript" src="${url}/bundle.js"> 
       </script>
        </body>
      </html>` 
      
};