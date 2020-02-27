function validation(){
            var user = document.getElementById('name').value;
            var email = document.getElementById('mail').value;
            var mess = document.getElementById('message').value;
            

            if(user == ""){
                document.getElementById('name404').innerHTML="**Entrez votre nom !";
                return false;
            }
            
            if (!isNaN(user)){
                document.getElementById('name404').innerHTML="**Entrez un nom valide !";
                return false;
            }

            if(email == ""){
                document.getElementById('mail404').innerHTML="**Entrez votre e-mail !";
                return false;
            }

            if(mess == ""){
                document.getElementById('message404').innerHTML="**Tapez votre message !";
                return false;
            }

            else{
                alert('Message envoyé')
            } 

        }