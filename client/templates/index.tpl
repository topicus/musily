<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      html, body {
        width: 100%;
        height: 100%;
        margin: 0;
      }
      body {
        overflow: hidden;
      }
      .root {
        width: 100%;
        height: 100%;
        font-family: "Trebuchet MS", Helvetica, sans-serif;
      }
      .form-control {
        margin-right: 4px;
      }
      
      .links line {
        stroke: #aaa;
      }

      .nodes circle {
        pointer-events: all;
        stroke: none;
        stroke-width: 40px;
      }      
    </style>
    <!-- Added here for simplicity -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">    
    <title><%= htmlWebpackPlugin.options.title || 'Musi.ly' %></title>
  </head>
  <body>
    <div class="root" id="root"></div>
  </body>
</html>
