function validateInscription($name, $lastname, $day , $month, $year,$profession_name, $nationnality, $login, $password, $lang, $mail, $msisdn, $prefix, $sexe, $country_residence)
{      
//            alert($login)
            $.ajax({
		type: 'POST',
		url: 'data/controllers/inscriptionController.php',
                                data: 'name=' + $name + '&lastname=' + $lastname +  '&profession=' + $profession_name + 
                                '&nationality=' + $nationnality +  '&login=' + $login +  '&password=' + $password+'&lang='+$lang+'&mail='+$mail+'&msisdn='+$msisdn+'&prefix='+$prefix+'&sexe='+$sexe+'&country_residence='+$country_residence,
                                dataType: 'json',
		success: function(data){
                                            alert(data);
                                    if(data== false){
//                                        alert('error');
                                             document.location.href="?page=inscription&lang="+$lang;;
                                    }else{
                                   var $type_user = data.profession;
                                   var $reference_user = data.reference_user;

                                        if($type_user == 1 || $type_user == 2){
                                            //Player
                                             document.location.href="?page=profil-joueur&lang="+$lang;;
                                        }else if($type_user == 4 || $type_user == 3){
                                            //club
                                             document.location.href="?page=profil-club&lang="+$lang;;
                                        }
                                        else if($type_user == 5){
                                            //recruiter
                                             document.location.href="?page=profil-recruiter&lang="+$lang;;
                                        }
                                    }
                    
                                  
                                    
		},
		error: function(){
//                                    alert("no_request");
		} 
                                //end error
	}); // end ajax
}


function update_infos_debase($name, $lastname, $day, $month, $year, $nationnality, $country_residence, 
$contact, $contact2, $mail, $login, $password_last, $new_password_1, $sexe, $new_password_2, $lang, $reference_user, $prefix,  $instagram_link, $linkdin_link, $youtube_link, $tweeter_link, $facebook_link, $club_name)
{      
            $.ajax({
		type: 'POST',
		url: 'data/controllers/validateFormController.php?action=update_infos_base',
                                data: 'name=' + $name + '&lastname=' + $lastname +  '&day=' + $day + '&sexe='+$sexe +
                                '&month=' + $month +  '&year=' + $year +  '&nationnality=' + $nationnality+'&country_residence='+$country_residence+
                                '&contact='+$contact+'&contact_2='+$contact2+'&mail='+$mail+'&login='+$login+'&last_password='+$password_last+'&new_password='+$new_password_1+
                                '&new_password_2='+$new_password_2+"&lang="+$lang+'&reference_user='+$reference_user+'&prefix='+$prefix+'&instagram_link='+$instagram_link+'&linkdin_link='+$linkdin_link+'&youtube_link='+$youtube_link+'&tweeter_link='+$tweeter_link+'&facebook_link='+$facebook_link+'&club_name='+$club_name,
                                dataType: 'json',
		success: function(data){
                    document.location.href="?page=settings&lang="+$lang;
		},
		error: function(){
                                    alert("no_request");
		} 
                                //end error
	}); // end ajax
}


function update_pass($login, $reference_user, $last_password ,$new_password,$re_new_password, $lang)
{      

    //    alert($login +" "+ $reference_user +" "+ $new_password +" "+$re_new_password +" "+$lang)
            $.ajax({
		type: 'POST',
		url: 'data/controllers/validateFormController.php?action=updatepass',
                                data: 'login='+$login+'&new_password='+$new_password+'&reference_user='+$reference_user+'&re_new_password='+$re_new_password+"&lang="+$lang+"&last_password="+$last_password,
                                dataType: 'json',
		success: function(data){
                    document.location.href="?page=settings&lang="+$lang;
		},
		error: function(){
                    alert("no_request");
		} 
                                //end error
	}); // end ajax
}


function create_palamres($year_win, $competition, $club, $reference_user, $lang, $id_type_user, $name_club, $url_retour )
{      
//    alert($lang)
            $.ajax({
		type: 'POST',
		url: 'data/controllers/validateFormController.php?action=create_palmares',
                                data: 'year_win=' + $year_win + '&competition=' + $competition +  '&club=' + $club + '&lang='+$lang+'&reference_user='+$reference_user+'&id_type_user='+$id_type_user+'&name_club='+$name_club,
                                dataType: 'json',
		success: function(data){
                    document.location.href=""+$url_retour+"&lang="+$lang;
		},
		error: function(){
                                    alert("no_request");
		} 
                                //end error
	}); // end ajax
}






function contactValidation($name, $lastname, $mail , $obj, $content, $lang)
{      

            $.ajax({
		type: 'POST',
		url: 'data/controllers/contactController.php',
                                data: 'name=' + $name + '&lastname=' + $lastname +  '&mail=' + $mail + 
                                '&content=' + $content +  '&action=insert_contact' + '&obj='+$obj+'&lang='+$lang,
                                dataType: 'json',
		success: function(data){
                                    
                                    if(data !="OK"){
                                        var $sp = data.split('|');
                                        for (var i = 0; i < ($sp.length)-1; i++) {
                                            document.location.href="?page=contact&lang="+$lang+"&error-form=true";
//                                            $("#error_form").html("<strong>!!!!!!!</strong> Indicates a dangerous or potentially negative action.<br>");  
//                                            document.location&.href="?page=contact&lang="+$lang+"&error-form=true" ;
                                        }
                                    }else{
                                        
                                        document.location.href="?page=contact&lang="+$lang;
                                    }
                                    
                                   
		},
		error: function(){
                                    alert("no_request");
		} 
                                //end error
	}); // end ajax
}



function test(champ)
{
  
//  alert();
  
//  console.log("Blue Whale".indexOf(""));
  
//  var $n1=1;
//  var $n2=2;
//  var $n3=3;
  alert('dmde');
//  var arr = ["$n3", "$n2", "$n1"];
//  
//  for (var i = 0; i < 3; i++) {
//        alert(arr[i]);
//        
//    } 
  
}


function login($login, $password, $lang)
{
    
                $.ajax({
		type: 'POST',
		url: 'data/controllers/loginController.php',
                                data: 'login=' + $login +  '&password='+$password+ '&lang='+$lang ,
                                dataType: 'json',
		success: function(data){
                                var $type_user = data[1];
                                var $reference_user = data[0];
                                    if(data == false){
                                        //Login and password incorrect
                                        document.location.href="?page=login&lang="+$lang;
                                        
                                    }else{

                                        var $type_user = data[0];
                                        var $reference_user = data[1];
                                        
//                                        alert($type_user);

                                        if($type_user == 1 || $type_user == 2){
                                            //Player
                                            document.location.href="?page=profil-joueur&lang="+$lang;

                                        }else if($type_user == 4 || $type_user == 3){
                                            //club
                                             document.location.href="?page=profil-club&lang="+$lang;
                                        }else if($type_user == 5){
                                            //recruiter
                                             document.location.href="?page=profil-recruiter&lang="+$lang;
                                        }else{
                                            document.location.href="?page=home&lang="+$lang;
                                        }

                                            
                                     }
		},
		error: function(){
                                    alert("txt_norequest");
		} 
                                //end error
	}); // end ajax
}

function validateUsername(username)
{
	if (username == '') return false;
	if (username.lenght < 6 && username.lenght > 15) return false;
	
	pattern = /^[A-Za-z0-9][A-Za-z0-9_]{5,14}$/; 
                //Allow only lowercase letters, digits and the underscore (except in the first position). With a minimum of 6 characters (1+5), and a maximum of 15 (1+14).
	if (username.match(pattern)) return true;
	return false;
}


function delete_publication($reference_publication, $lang){
//    alert($reference_publication)
     $.ajax({
		type: 'GET',
                                url: 'data/controllers/validateFormController.php',
                                data: 'reference_publication='+$reference_publication+'&action=delete_publication' ,
//                                dataType: 'json',
		success: function(data){
//                                alert($reference_publication);
                                    document.location.href="?page=account-publications&lang="+$lang;
		},
		error: function(){
                    alert("txt_norequest");
		}
                //end error
	}); // end ajax
}

function delete_palmares($reference_palmares, $lang,$msg,type){
     if (confirm($msg) == true) {
     $.ajax({
		type: 'POST',
                                url: 'data/controllers/validateFormController.php?action=delete_palmares',
                                data: 'reference_palmares='+$reference_palmares ,
//                                dataType: 'json',
		success: function(data){
//                                alert($reference_publication);
                                     if(type=='c'){
                                        document.location.href="?page=settings&item=form3&lang="+$lang;
                                    }else if(type=='j'){
                                        document.location.href="?page=settings&item=form3&lang="+$lang; 
                                    }
                                    
		},
		error: function(){
                                    alert("txt_norequest");
		} 
                                //end error
	}); // end ajax
    }
}


function displayErrorText($input, $indice_error)
{
    $('.blue-box-content').html($indice_error);
    $('#'+$input+'').slideDown(1000).delay(1000).slideUp(1000);
    return false;
}

function if_login_exist($login){
                $.ajax({
		type: 'POST',
		url: 'data/controllers/controlController.php',
                                data: 'login=' + $login + '&action=control_login',
//                                dataType: 'json',
		success: function(data){
                                    alert(data)
                                    if(data == "TRUE"){
                                         return  displayErrorText('login_error', 'invalid_login');
                                         return false;
                                    }else{
                                       //
                                    }
                                   
		},
		error: function(){
                                    alert("txt_no_request");
		} 
                                //end error
                    }); // end ajax
}

function isLetter(s)
{
  return s.match("^[a-zA-Z\(\)]+$");    
}


function load_language($lang)
{
    $.ajax({
            type: 'POST',
            url: 'data/languages/fr/language.php',
            success: function(data){
                              $( "body" ).show("data/languages/fr/language.php");
            },
            error: function(){
                                alert("txt_norequest");
            } 
                            //end error
    }); // end ajax    
}


function isValideDate(d) {
	// Cette fonction permet de vérifier la validité d'une date au format jj/mm/aa ou jj/mm/aaaa
	// Par Romuald
	
	if (d == "") // si la variable est vide on retourne faux
		return false;
	
	e = new RegExp("^[0-9]{1,2}\/[0-9]{1,2}\/([0-9]{2}|[0-9]{4})$");
	
	if (!e.test(d)) // On teste l'expression régulière pour valider la forme de la date
		return false; // Si pas bon, retourne faux
                
	// On sépare la date en 3 variables pour vérification, parseInt() converti du texte en entier
	j = parseInt(d.split("/")[0], 10); // jour
	m = parseInt(d.split("/")[1], 10); // mois
	a = parseInt(d.split("/")[2], 10); // année

	// Si l'année n'est composée que de 2 chiffres on complète automatiquement
	if (a < 1000) {
		if (a < 89)	a+=2000; // Si a < 89 alors on ajoute 2000 sinon on ajoute 1900
		else a+=1900;
	}

	// Définition du dernier jour de février
	// Année bissextile si annnée divisible par 4 et que ce n'est pas un siècle, ou bien si divisible par 400
	if (a%4 == 0 && a%100 !=0 || a%400 == 0) fev = 29;
	else fev = 28;

	// Nombre de jours pour chaque mois
	nbJours = new Array(31,fev,31,30,31,30,31,31,30,31,30,31);

	// Enfin, retourne vrai si le jour est bien entre 1 et le bon nombre de jours, idem pour les mois, sinon retourn faux
	return ( m >= 1 && m <=12 && j >= 1 && j <= nbJours[m-1] );
}


function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

function loadvideo($reference_videos){
//        $('#videoPlay').prop('src', '');
//        alert($reference_videos)
        
        $.ajax({
                    type: 'GET',
                    url: 'data/controllers/validateFormController.php',
                    data: 'action=loadvideos&reference_video='+$reference_videos ,
                    dataType: 'json',
                    success: function(data){
                        
                        $("#tab1 ul li").css('background', 'none');
                        $("#"+$reference_videos).css('background', '#CCC');
                        
//                        alert($reference_videos)
                        $("#title_video").html(data.Records[0].title_videos);
                        $("#videoPlay").attr('src', 'https://www.youtube.com/embed/'+data.Records[0].video_link+'?rel=0&autoplay=1');
                        
                        
                        
                        console.log("========="+data.Records[0].video_link);

                    },
                    error: function(){
                        alert("txt_norequest");
                    } 
                                    //end error
	}); // end ajax
        
    }
    
    
    function delete_recrue($reference_favorite, $reference_follower, $reference_following , $a , $msg){
//        alert($reference_follower + " ==== " +$reference_following );
  if (confirm($msg) == true) {
     $.ajax({
		type: 'GET',
                                url: 'data/controllers/validateFormController.php',
                                data: 'reference_favorite='+$reference_favorite+'&action=delete_favorite' ,
		success: function(data){
                                    
		},
		error: function(){
                                    alert("txt_norequest");
		} 
	}); // end ajax
    

$.ajax({
		type: 'POST',
                                url: 'data/controllers/validateFormController.php',
                                data: 'action=delete_follow_relation&reference_follower='+$reference_follower + "&reference_following="+$reference_following,
		success: function(data){
                                    //Update follow inputs
                                    document.location.href="?page=recruits&lang=fr";
		},
		error: function(){
//                                    alert("no_request");
		} 
	}); 
}

}
    
function check_image_size($return_val) {
   var _URL = window.URL || window.webkitURL;
    $("#files").change(function (e) {
    var file, img;
    if ((file = this.files[0])) {
        img = new Image();
        img.onload = function () {
            alert(this.width + " " + this.height);
        };
        img.src = _URL.createObjectURL(file);
//        if($return_val == "h"){
//                return this.height;
//        }else{
//                return this.width;
//        }
    }
});
}

function deletepost($reference_postuled){
    $.ajax({
		type: 'GET',
                                url: 'data/controllers/validateFormController.php',
                                data: 'reference_postuled='+$reference_postuled+'&action=desable_post' ,
		success: function(data){

		},
		error: function(){
//                                    alert("txt_norequest");
		} 
	}); // end ajax
}


function create_follow($reference_follower, $reference_following){
//    $("#followuserid").css("border", "solid 1px red");
//    $("#followuserid").css("width", "200px");
    
    $("#blck").css("display", "none");
    $("#wait_following").css("display", "inline-block");
//    $("#wait_following").css("margin-left", "320px");
//    $("#wait_following").css("margin-top", "-28px");
//    alert(' == 1 == ');
    $.ajax({
		type: 'POST',
                                url: 'data/controllers/validateFormController.php',
                                data: 'action=create_follow&reference_follower='+$reference_follower+'&reference_following='+$reference_following ,
		success: function(data){
                    // end ajax
                    $("#wait_following").css("display", "none");
                    $("#ne_plus_suivre").css("display", "inline-block");
//                    $("#ne_plus_suivre").css("margin-left", "320px");
//                    $("#ne_plus_suivre").css("margin-top", "-28px");
                    
                    $(".btn-warning").css("display", "inline-block");
//                     $(".btn-warning").css("margin-top", "-28px");
		},
		error: function(){
//                                    alert("txt_norequest");
		} 
	}); 
        
}

function postule($reference_publication, $reference_user){
//    alert($reference_publication + "  === " +$reference_user);
    $.ajax({
                                type: 'POST',
                                url: 'data/controllers/validateFormController.php',
                                data: 'action=postule&reference_publication='+$reference_publication+'&reference_user='+$reference_user ,
		success: function(data){
//                    alert(data)
		},
		error: function(){
//                                    alert("txt_norequest");
		} 
	}); 
        // end ajax
}

function delete_postule($reference_postule ){
    $.ajax({
                                type: 'POST',
                                url: 'data/controllers/validateFormController.php',
                                data: 'action=delete_postule&reference_postule='+$reference_postule ,
		success: function(data){
                                    //Update follow inputs
//                                    alert("delte pos")
		},
		error: function(){
//                                    alert("norequest");
		} 
	}); 
        // end ajax
}


function delete_follow($reference_follow ){
    
//    alert($reference_follow)
    
    $("#ne_plus_suivre").css("display", "none");
    $("#wait_following").css("display", "block");
    $("#wait_following").css("margin-left", "300px");
    
    alert(' == 2 == ');
    //alert($reference_follow);
    $.ajax({
		type: 'POST',
                                url: 'data/controllers/validateFormController.php',
                                data: 'action=delete_follow&reference_follow='+$reference_follow,
		success: function(data){
                                    //Update follow inputs
                    $("#wait_following").css("display", "none");
                    $("#blck").css("display", "block");
                    $("#blck").css("margin-left", "300px");
		},
		error: function(){
//                                    alert("no_request");
		} 
	}); 
        // end ajax



        

}



function delete_follow_relation($reference_follower, $reference_following, $reference_favorite ){
    
//    alert($reference_follower + ' ==== ' + $reference_following );
    
    $("#ne_plus_suivre").css("display", "none");
    $("#wait_following").css("display", "inline-block");
//    $("#wait_following").css("margin-top", "-180px");
//    $("#followuserid").css("width", "600px");
//    $("#wait_following").css("margin-left", "300px");

    
//    alert(' == 2 == ');
    //alert($reference_follow);
    $.ajax({
		type: 'POST',
                                url: 'data/controllers/validateFormController.php',
                                data: 'action=delete_follow_relation&reference_follower='+$reference_follower + "&reference_following="+$reference_following,
		success: function(data){
                                    //Update follow inputs
		},
		error: function(){
//                                    alert("no_request");
		} 
	}); 
        // end ajax
        
        
//        ####################"" follow relation ###################""
        $.ajax({
		type: 'GET',
                                url: 'data/controllers/validateFormController.php',
                                data: 'reference_favorite='+$reference_favorite+'&action=delete_favorite' ,
		success: function(data){
                               //     document.location.href="?page=recruits&lang=fr";
                               
                    $("#wait_following").css("display", "none");

                    $("#blck").css("display", "inline-block");
//                    $("#blck").css("margin-left", "320px");
//                    $("#blck").css("margin-top", "-5px");

                    $("#conct").css("display", "inline-block");
//                    $("#conct").css("margin-left", "417px");
//                    $("#conct").css("margin-top", "-28px");

		},
		error: function(){
                                    alert("txt_norequest");
		} 
	}); // end ajax
//        ####################"" fin follow relation ###################""
        
        
        



        

}








function set_interest($critere, $critere_val, $reference_recruiter)
{      
//    alert($critere)
            $.ajax({
		type: 'POST',
		url: 'data/controllers/validateFormController.php?action=set_criteres',
                                data: 'critere=' + $critere + '&critere_val=' + $critere_val +  '&reference_user=' + $reference_recruiter ,
                                dataType: 'json',
		success: function(data){
		},
		error: function(){
                                   //alert("no_request");
		} 
                                //end error
	}); // end ajax
}


function update_players_infos($poste, pied, $poids ,$lang, $reference_user,$taille, $club_actuel){
            $.ajax({
                                type: 'POST',
                                url: 'data/controllers/validateFormController.php?action=update_players_infos',
                                data: 'poste=' + $poste + '&peid=' + pied +  '&poids=' + $poids+'&lang='+$lang+'&reference_user='+$reference_user+'&club_actuel='+$club_actuel+"&taille="+$taille ,
                                dataType: 'json',
		success: function(data){
                                    document.location.href="?page=settings&lang="+$lang;
                },
		error: function(){
                                    alert("no_request");
		} 
                                //end error
	}); // end ajax
}

function renitialize_password($login, $lang) {
    $.ajax({
        type: 'POST',
        url: 'data/controllers/validateFormController.php?action=reinitialize_password',
        data: 'login=' + $login + '&lang=' + $lang,
        dataType: 'json',
        success: function (data) {
          //  alert("data=" + data);
             document.location.href = "?page=forget-password&lang=" + $lang;
             location.reload();
           //alert("data=" + data);
            if (data == false) {
                document.location.href = "?page=forget-password&lang=" + $lang;
           } else if (parseInt(data) == 3|| parseInt(data) == 4) {
                 $("#notespass").css("display", "none");
                $("#formpassbox").css("display", "none");
                $("#error_form").css("display", "block");
                 $("#loginincorrect").css("display", "block").show().fadeOut( 5 ).queue(function() {
                    document.location.href = "?page=forget-password&lang=" + $lang;
                     });        
                  
               
            } else if (parseInt(data) == 2) {
                 $("#loginincorrect").css("display", "block");
                 $("#error_form").css("display", "block");
                  document.location.href = "?page=forget-password&lang=" + $lang;
            } else if (parseInt(data) == 1) {
               
                 document.location.href = "?page=forget-password&lang=" + $lang;
              } else if (data == true) {
                
                 document.location.href = "?page=forget-password&lang=" + $lang;
            }else{
               document.location.href = "?page=forget-password&lang=" + $lang;  
            }  
        },
        error: function () {
            alert("no_request");
        }
        //end error
    }); // end ajax
    
    
}


function edit_news_password($password,$reference_user,  $lang){
     $.ajax({
        type: 'POST',
        url: 'data/controllers/validateFormController.php?action=edit_password',
        data: 'password=' + $password   +  '&lang=' + $lang+  '&reference_user=' + $reference_user  ,
        dataType: 'json',
        success: function(data){
            if(data == false){
            document.location.href="?page=login&lang="+$lang;
            }else{
               // alert("oook")
                 document.location.href="?page=login&lang="+$lang;
            }
        },
        error: function(){
            alert("no_request");
        } 
        //end error
	}); // end ajax
}


function  create_carrieres($year_win, $competition, $refclub, $reference_user, $name_club,$lang )
{      
  // alert('year_win=' + $year_win + '&competition=' + $competition +  '&refclub=' + $refclub + '&lang='+$lang+'&reference_user='+$reference_user+'&name_club='+$name_club);
            $.ajax({
		type: 'POST',
		url: 'data/controllers/validateFormController.php?action=create_carrieres',
                 data: 'year_win=' + $year_win + '&competition=' + $competition +  '&refclub=' + $refclub + '&lang='+$lang+'&reference_user='+$reference_user+'&name_club='+$name_club,
                dataType: 'json',
		success: function(data){
                 document.location.href="?page=settings&item=form4&lang="+$lang;
		},
		error: function(){
                 alert("no_request");
		} 
                                //end error
	}); // end ajax
}

function delete_carriere($reference_carriere, $lang) {
    //alert($reference_carriere);
    if (confirm("vous voulez vous supprimer l'enregistrement ?") == true) {
        $.ajax({
            type: 'POST',
            url: 'data/controllers/validateFormController.php?action=delete_carriere',
            data: 'reference_carriere=' + $reference_carriere,
//                                dataType: 'json',
            success: function (data) {
//                                alert($reference_publication);
                document.location.href = "?page=settings&item=form4&lang=" + $lang;
            },
            error: function () {
                alert("txt_norequest");
            }
            //end error
        }); // end ajax
    } else {
        return false;
    }
}


function delete_abn($reference_abonnement, $lang){
    
     $.ajax({
		type: 'POST',
                url: 'data/controllers/validateFormController.php?action=delete_abonnement',
                data: 'reference_abonnement='+$reference_abonnement ,
		success: function(data){
                    document.location.href="?page=profil-recruiter&lang="+$lang;
		},
		error: function(){
                    alert("txt_norequest");
		} 
                                //end error
	}); // end ajax
}


function set_abonnement($reference_user, $lang){
    
     $.ajax({
		type: 'POST',
                url: 'data/controllers/validateFormController.php?action=set_abonnement',
                data: 'reference_user='+$reference_user ,
		success: function(data){
                    document.location.href="?page=profil-recruiter&lang="+$lang;
		},
		error: function(){
                    alert("txt_norequest");
		} 
                                //end error
	}); // end ajax
}

function addSlash(str) {
      str = str.replace(/'/g, "\\'");
      return str;
}


function create_vote_sondage(code_sondage,choixvote,type_sondage,$lang)
{      
//    alert($lang)
            $.ajax({
		type: 'POST',
		url: 'data/controllers/validateFormController.php?action=create_voting',
                                data: 'code_sondage=' + code_sondage + '&choixvote=' + choixvote +  '&type_sondage=' + type_sondage + '&lang='+$lang,
                                dataType: 'json',
		success: function(data){
                     document.location.href="?page=stat-resultats&lang="+$lang;
		},
		error: function(){
                alert("no_request");
		} 
                                //end error
	}); // end ajax
}
