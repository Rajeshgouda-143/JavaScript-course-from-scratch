# Projects related to DOM

# Solution Code

## project 1

```Color Changer

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Changer</title>

    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        body{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-top: 200px;
            gap: 30px;
        }

        .color-box{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        #grey{
            height: 100px;
            width: 100px;
            background-color: grey;
        }
        #green{
            height: 100px;
            width: 100px;
            background-color: green;
        }
        #purple{
            height: 100px;
            width: 100px;
            background-color: purple;
        }
        #yellow{
            height: 100px;
            width: 100px;
            background-color: yellow;
        }


    </style>

</head>
<body>
    <h1>Color Scheme Switcher</h1>

    <div class="color-box">
        <div class="button" id="grey"></div>
        <div class="button" id="green"></div>
        <div class="button" id="purple"></div>
        <div class="button" id="yellow"></div>
    </div>

    <h2>
        Try clicking on one of the colors above 
        <br>to change the background color of this page!
    </h2>
</body>

<script>
    const colorBox = document.querySelectorAll(".button")
    console.log(colorBox)
    const body = document.querySelector("body")

    colorBox.forEach( function(color){
        console.log(color)

        color.addEventListener("click", function(e){
            console.log(e)
            console.log(e.target)

            if (e.target.id === "grey"){
                body.style.backgroundColor = "grey"
            }
            if (e.target.id === "green"){
                body.style.backgroundColor = "green"
            }
            if (e.target.id === "purple"){
                body.style.backgroundColor = e.target.id
            }
            if (e.target.id === "yellow"){
                body.style.backgroundColor = e.target.id
            }
        })
    })
</script>

</html>

```