var questions=["Where are you from?","Whats your age?","Had food?","okay bye!!"];

var i = 0;
var a=0;
var j=0;

var frdchat = document.getElementById('friendchat');
var selfchat=document.getElementById('userchat');

function duplicate() 
{
	var user = document.getElementById("userBox").value;
	document.getElementById("userBox").value = "";


	var clone1 = selfchat.cloneNode(true); // "deep" clone
	
    clone1.id = "self" + ++j; // there can only be one element with an ID
	var c1=clone1.children;
	c1[1].innerText=user;
	selfchat.parentNode.appendChild(clone1);

	if(user=="Bye"|| user=="bye")
	{
		return;
	}
	else
	{
	    var clone = frdchat.cloneNode(true); // "deep" clone
	   
	    clone.id = "friend" + ++i; // there can only be one element with an ID duplicetor
	    var c=clone.children;
	    c[1].innerText=questions[a++];
	    frdchat.parentNode.appendChild(clone);

	}

}
