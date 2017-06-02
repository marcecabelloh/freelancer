
/* CREACION DE MODAL NO FUNCIONA*/

 (function main(){
 	var boxes = Array.from(document.getElementsByClassName("imagen"));
 	var modal = document.getElementById("box-services-modal");
 	var bodyModal, close, img;
 	boxes.forEach(function(box){
 		box.addEventListener("click", function(){
 			modal.innerHTML = "";
 			bodyModal = document.createElement("div");
 			bodyModal.classList.add("modal-body");
 			bodyModal.innerHTML = box.innerHTML;			
 			modal.appendChild(bodyModal);
 			modal.classList.remove("hide");
 			close = document.createElement("div");
 			close.classList.add("close");
 			img = document.createElement("img");
 			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
 			close.appendChild(img);
 			modal.appendChild(close);
 			close.addEventListener("click",function(){
 				modal.classList.add("hide");
 			});
 		});		
 	});
 })();


 /* intento validar campos del formulario*/

 
 document.getElementById("send").addEventListener("click", function usuario(){


 	var nombre = document.getElementById("name").value;
 	var email = document.getElementById("email").value;
 	var telefono = document.getElementById("telefono").value;
 	var mensaje = document.getElementById("message").value;


 	

 	if (nombre.length == "" || email.length == "" || telefono.length == "" || mensaje.length ==  ""){
 		alert("llene todos los campos");
 	}
 })
