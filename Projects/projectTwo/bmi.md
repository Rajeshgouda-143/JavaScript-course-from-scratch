# Project Two

## BMI Calculator

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Generator</title>
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: sans-serif;
        }

        body{
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to right bottom,#2a23,#3a4a5a);
        }

        .container{
            min-width: 550px;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
            box-shadow: 5px 5px 5px #2a2a2a, 10px 5px 10px #3a3a3a;
            border: 1px solid #ffff;
            border-radius:5px;
        }

        form{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px;
        }

        h1{
            font-size: 40px;
        }

        form input{
            width:350px;
            padding: 10px;
            border: none;
            outline: none;
            border-radius: 5px;
        }

        form label{
            font-size: 22px;
            margin-right:210px ;
        }

        button{
            width: 350px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            outline: none;
            margin-block:40px;
            cursor: pointer;
            background-color:rgb(142, 142, 197);
            color: #fff;
            font-size: 20px;
            letter-spacing: 2px;
            transition:all 0.7s ease-in-out rgba(65, 84, 65, 0.667);
        }

        button:hover{
            transform: translateY(-5px);
            background-color: rgba(65, 84, 65, 0.667);
            opacity: 0.7;
        }

        button:active{
            background-color: #3a4a5a;
        }

        #weight-guide{
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            margin-right: 70px;
            font-size: 20px;
        }

        #results{
            width: 350px;
            display: flex;
            align-items: start;
            justify-content: center;
            margin-right: 20px;
            font-size: 18px;
            color: bisque;
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>BMI Calculator</h1>
        <form action="">
            <label for="">height in CM:</label>
            <input type="text" id="height">
            <label for="">Weight in KG:</label>
            <input type="text" id="weight">
            <button>Calculate</button>
            <div id="results"></div>
            <div id="weight-guide">
                <h3>BMI weight guide</h3>
                <p>Under weight = Less than 18.6</p>
                <p>Normal Range = 18.6 and 24.9</p>
                <p>Overweight = Greater than 24.9</p>
            </div>
        </form>
    </div>
</body>

<script>

    const form = document.querySelector("form")
    //this usecase will give you empty
    // const height = parseInt(document.querySelector("#height").value);


    form.addEventListener("submit", function(e){
        e.preventDefault()

        const height = parseInt(document.querySelector("#height").value);
        const weight = parseInt(document.querySelector("#weight").value);
        const results = document.querySelector("#results");

        if ( height === "" || height < 0 || isNaN(height)){
            results.innerHTML = `Please enter a valid height ${height}`
        }else if ( weight === "" || weight < 0 || isNaN(weight)){
            results.innerHTML = `Please enter a valid height ${weight}`
        }else{

            const BMI = (weight / ((height*height)/10000)).toFixed(2)

            // show the results

            // results.innerHTML = `<span>BMI: ${BMI}</span>`

            if(BMI < 18.6){
                results.innerHTML = `<span>The Weight ${BMI} is under weight</span>`
            }else if (BMI > 18.6 && BMI < 24.9){
                results.innerHTML = `<span>The Weight ${BMI} is Normal Range</span>`
            }else if(BMI > 24.9){
                results.innerHTML = `<span>The Weight ${BMI} you are not in the range</span>`
            }

            //Clear input fields

            form.reset()
        }

    })
</script>

</html>
```

