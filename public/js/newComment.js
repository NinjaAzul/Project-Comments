function newComment(){
  let commentArea =  document.querySelector(".comment-area");
  let formNewComment = document.querySelector("#formNewComment");

  console.log(commentArea.value)
   
  formNewComment.addEventListener("submit", function(event){
    event.preventDefault();

    if(commentArea.value === ""){
     return alert("fill in the comment field");
    }

    let dados = {
      comment: commentArea.value
    }
    console.log(dados);

    fetch('http://localhost:4000/index',{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    })
    .then(function (response) {
     return response.json();
    })
    .then(function(response){
      commentArea.value = "";
     alert("a new comment was created");
    })
  });
}
newComment();