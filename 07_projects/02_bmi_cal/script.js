const form = document.querySelector("form")

form.addEventListener('submit', function(e){
    e.preventDefault()

    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    console.log(height, weight)

    let res = document.querySelector("#result")
    
    if(height === '' || height < 0 || isNaN(height)){
        res.innerHTML = `Please enter valid height ${height}`
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        res.innerHTML = `Please enter valid weight ${weight}`
    }
    else{
        const bmi = (weight /( (height*height)/10000)).toFixed(2)
        res.innerHTML = `<span>${bmi}</span>`
    }
})