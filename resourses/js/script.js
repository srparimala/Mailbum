
function showSocialIcons() {
	   if(document.getElementById("socialIcon").checked){		
		 document.getElementById("socialIconGroup").style.display="block";}
		else {		
		  document.getElementById("socialIconGroup").style.display="none";}
	
	}


function showHtmlScript() {
		
		if(document.getElementById("showhtml").checked)
		{			
			
		   document.getElementById("code-htmlscript").style.display="block";	
			
		document.getElementById('code-htmlscript').innerHTML=document.getElementById('preview-output').innerHTML
					
		}
		else {		
		  document.getElementById("code-htmlscript").style.display="none";
		}	
	}

function slideFunction(val) {
  document.getElementById("demo").innerHTML = val; 
  document.getElementById("fbimg").width=val;
  document.getElementById("twimg").width=val;
  document.getElementById("instaimg").width=val;
  document.getElementById("youtubeimg").width=val;
  document.getElementById("linkedinimg").width=val;
}

function printFullname(){
	document.getElementById("printfullname").style.display="block";
	document.getElementById("hint").style.display="none";
	var x=document.getElementById("fullname").value;
	document.getElementById("printfullname").innerHTML="<strong>"+x+"</strong><br>";
}


function printJobtitle(){		
	document.getElementById("printjobtitle").style.display="block";
	var x=document.getElementById("jobtitle").value;	
	document.getElementById("printjobtitle").innerHTML=x+"</span><br><br>"; 
}

function printPhonenumber(){		
	document.getElementById("printphonenumber").style.display="block";
	var x=document.getElementById("phone").value;	
	document.getElementById("printphonenumber").href=x; 	
	document.getElementById("printphonenumber").innerHTML=x; 	
}

function printWebsite(){			
	document.getElementById("printwebsite").style.display="block";
	var x=document.getElementById("website").value;	
	document.getElementById("printwebsite").href=x;	
	document.getElementById("printwebsite").innerHTML=x;	
}

function printLogourl(){	
	document.getElementById("logoimg").style.display="block";
	document.getElementById('logoimg').src =document.getElementById("logourl").value;	
}

function printFacebook() {
	document.getElementById("fbimg").style.display="inline-block";
	var x=document.getElementById("facebook").value;	
	document.getElementById("printfacebook").href=x; 	
	var slidervalue=document.getElementById("sliderrange").value;	
	document.getElementById("fbimg").width=slidervalue;
}

function printTwitter() {
	document.getElementById("twimg").style.display="inline-block";
	var x=document.getElementById("twitter").value;	
	document.getElementById("printtwitter").href=x; 	
	var slidervalue=document.getElementById("sliderrange").value;	
	document.getElementById("twimg").width=slidervalue;
}

function printInstagram() {
	document.getElementById("instaimg").style.display="inline-block";
	var x=document.getElementById("instagram").value;	
	document.getElementById("printinstagram").href=x; 	
	var slidervalue=document.getElementById("sliderrange").value;	
	document.getElementById("instaimg").width=slidervalue;
}

function printYoutube() {
	document.getElementById("youtubeimg").style.display="inline-block";
	var x=document.getElementById("youtube").value;	
	document.getElementById("printyoutube").href=x; 	
	var slidervalue=document.getElementById("sliderrange").value;	
	document.getElementById("youtubeimg").width=slidervalue;
}

function printLinkedin() {
	document.getElementById("linkedinimg").style.display="inline-block";
	var x=document.getElementById("linkedin").value;	
	document.getElementById("printlinkedin").href=x; 	
	var slidervalue=document.getElementById("sliderrange").value;	
	document.getElementById("linkedinimg").width=slidervalue;
}


 
 