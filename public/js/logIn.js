function logIn() {

  let name = document.querySelector(".name");
  let eMail = document.querySelector(".eMail");
  let formLogin = document.querySelector("#formLogIn");


  formLogin.addEventListener("submit", function (event) {
    event.preventDefault();


    if(name.value === "" || eMail.value === ""){
      return alert("fill in all fields");
     }

    let dados = {
      name: name.value,
      eMail: eMail.value
    }
    

    fetch('http://localhost:4000/createUser', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    }).then(async function (response) {

      const { redirectTo } = await response.json();
      if (redirectTo) {
        location.assign(redirectTo)
      }
    })
  });



}

logIn();