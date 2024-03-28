console.log("hola mundo")
// => crear nuestra base de datos

const banco = [
    {
        nombre: "Carlos",
        cuenta: 123456,
        password: "123",
        saldo: "100",
        currency: "MXN"
    },
    {
        nombre: "Fernando",
        cuenta: 654321,
        password: "123",
        saldo: "200",
        currency: "USD"

    }
];

// => capturar el input de la cuenta

const cuenta = document.querySelector("#login-cuenta")

// => capturar el input del password

const password = document.querySelector("#password")

// => comprobar que sea la combinacion correcta

const buttonLogin = document.querySelector("button")
//document.addEventListener("button")
buttonLogin.addEventListener("click", function(e){
    e.preventDefault()
    const currentCuenta = cuenta.value
    const currentPassword = password.value

    let correctUser = null 
    for (let i = 0; i < banco.length; i++) {
        const usuarioBb = banco[i]
        if (usuarioBb.cuenta === Number(currentCuenta) && usuarioBb.password === currentPassword) {
            correctUser = usuarioBb
            break
        } 
    }

    console.log(correctUser, "Si lo encontramos")
    if (!correctUser) {
        alert("Alto ahi ampon")
    } else {
        localStorage.setItem("correctUser", JSON.stringify(correctUser))
        window.location.href = "/atm.html"
        alert("Bienvenido " + correctUser.nombre)
    }
})


// => si es correcta lo dejamos pasar



    // => guardar el login // localstorage



// => le mandamos mensaje de error
