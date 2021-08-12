function changeLabel1() {
	    document.getElementById("l1").innerHTML = "Docker Command";
}

function changeLabel2() {
	    document.getElementById("l1").innerHTML = "K8s Command";
}

function sendBackEnd() {
    document.getElementById("output").innerHTML = "[root@localhost ~]#";
	var xhr = new XMLHttpRequest();
	var i = document.getElementById("in1").value;
  
    if (window.location == "http://192.168.43.179/web.html#docker") {
        if(i.includes("docker")== true) {
            xhr.open("GET", "http://192.168.43.179/cgi-bin/backend.py?x=" + i, true);
	        xhr.send();
	        xhr.onload = function() {
		    //output getting/coming from url
		    var output1 = xhr.responseText;                          
		    document.getElementById("output").innerHTML =  document.getElementById("output").innerHTML +                                         document.getElementById("in1").value + '\n' + output1;
            }
        }
        else
            alert("Enter Docker Command");
    }
   
    else {
        if(i.includes("docker") != true) {
            xhr.open("GET", "http://192.168.43.179/cgi-bin/backend.py?x=" + i, true);
	        xhr.send();
	        xhr.onload = function() {
		    //output getting/coming from url
		    var output1 = xhr.responseText;                          
		    document.getElementById("output").innerHTML =  document.getElementById("output").innerHTML +                                         document.getElementById("in1").value + '\n' + output1;

            }            
        }
        else
            alert("Enter Kubernets Command");
    }
}

function autoType() {
	document.getElementById("output").innerHTML = "[root@localhost ~]#" +  document.getElementById("in1").value;
}
