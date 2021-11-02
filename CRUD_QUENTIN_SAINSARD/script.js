userIndex = 0;
index = null;
var emailTab = new Array();

function sendData(event) {
    var prenom = $("#inputPrenom").val();
    var nom = $("#inputNom").val();
    var email = $("#inputEmail").val();
    var userContainer = document.getElementById(index);
    if ($(userContainer).attr('id') == null) {
        if(emailTab.includes(email))
        {
            event.preventDefault();
            $("#inputPrenom").val(null);
            $("#inputNom").val(null);
            $("#inputEmail").val(null); 
            $("#warningMessage").show();
            $("#warningMessage").text("Cet email est déjà utilisé !");
        }
        else{
            event.preventDefault();
            $('<div class="mt-3 users" id="' + userIndex + '"><span class="index">' + userIndex + '</span><span> | </span><span class="nom">' + nom + '</span><span> | </span><span class="prenom">' + prenom + '</span><span> | </span><span class="email">' + email + '</span><button class="ms-2" onclick="updateUser(this)">Update</button><button class="ms-2" onclick="deleteUser(this)">Delete</button></div>').appendTo('#usersList');
            userIndex++;
            $("#inputPrenom").val(null);
            $("#inputNom").val(null);
            $("#inputEmail").val(null);
            emailTab.push(email);
            console.log(emailTab);
            $("#warningMessage").hide();
        }
    } else {
        event.preventDefault();
        var container = document.getElementById(index);
        container.querySelector(".nom").textContent = nom;
        container.querySelector(".prenom").textContent = prenom;
        container.querySelector(".email").textContent = email;
        $("#inputPrenom").val(null);
        $("#inputNom").val(null);
        $("#inputEmail").val(null);
        index = null;
        $("#sendButton").html("Ajouter");
    }
}

function updateUser(user) {
    index = user.parentNode.id;
    testContainer = document.getElementById(user.parentNode.id);
    var nom = testContainer.querySelector(".nom").textContent;
    var prenom = testContainer.querySelector(".prenom").textContent;
    var email = testContainer.querySelector(".email").textContent;
    $("#inputNom").val(nom);
    $("#inputPrenom").val(prenom);
    $("#inputEmail").val(email);
    $("#sendButton").html("Update");
}

function deleteUser(user) {
    var answer = confirm("Êtes vous sûr ?");
    if(answer)
        $(user.parentNode).remove();
}