function singUp(){
  let name =  document.querySelector(".sname");
  let eMail = document.querySelector(".seMail");
  let formSignUp = document.querySelector("#formSignUp");
  
 

  formSignUp.addEventListener("submit", function(event){
    event.preventDefault();

    if(name.value === "" || eMail.value === ""){
     return alert("fill in all fields");
    }

    let dados = {
      name: name.value,
      eMail: eMail.value
    }
    console.log(dados);

    fetch('http://localhost:4000/createUser',{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    })
    .then(async function (response) {
      const { redirectTo } = await response.json();
      if (redirectTo) {
        location.assign(redirectTo)
      }
    })
  });

}

singUp();