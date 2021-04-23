<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="assets/scripts/script.js"></script>
    <style>
        .pokemon{
            width: 100px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container-fluid">
    <!-- Content here -->
    <!-- As a link -->
        <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-center mx-auto" href="#"><img src="https://i.pinimg.com/originals/50/e1/db/50e1db4684e6f697f93590950eb832f6.png" alt="" width="32"  class="d-inline-block align-text-top pr-2">Pokedex</a>
        </div>
        </nav>

        <div class="container-fluid border">
            <div class="row">
                <div id="pokemon" class="col-8  text-center"></div>
                <div id="pokedex"class="col-4 pokedex border"></div>
            </div>
        </div>

    </div>
    <script>
        
    </script>
</body>
</html>