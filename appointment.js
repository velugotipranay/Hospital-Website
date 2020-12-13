	function validate(){
		var Specialist=document.myform.Specialist.value;
		var exp=/^[A-Za-z\s]+$/ ;
		var patientname=document.myform.patientname.value;
		var result=exp.test(patientname);
		var exp2=/^[0-9]+$/;
		var phoneNumber=document.myform.phoneNumber.value;
		var result2=exp2.test(phoneNumber);
		var exp3=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		var email=document.myform.email.value;
		var result3=exp3.test(email);
		var date=document.getElementById("Date").value;
		var d=new Date();
		var x=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
		var checkDate=date.substr(8,2);
		var equalDate=d.getDate();
		var checkMonth=date.substr(5,2);
		var equalMonth=d.getMonth();
		var checkYear=date.substr(0,4);
		var equalYear=d.getFullYear();
		    if(checkMonth>=equalMonth){
		    	if(checkDate<equalDate){
				alert("Date cannot be less than today!! ");
				return false;
				}
			}
			else if(checkMonth<equalMonth){
				if(checkYear<equalYear){
					alert("Date cannot be less than today!! ");
					return false;
				}
			}
			if(result){
				if(result3){
					if(result2){
						if(Specialist==""){
						alert("Please select Specialist doctor");
						return false;
						}

						if(phoneNumber.length<10){
						alert("Phone number must be 10 digits");
						return false;
					    }
					}					
					else{
						alert("Phone Number must have only numbers");
						document.myform.phoneNumber.focus();
						return false;
						
					}

				}
				else{
					alert("Please check Email Id format");
					return false;
					document.myform.email.focus();
				}
				

			    
		    }

			else{
				alert("patient name should be only alphabets");
				return false;
				document.myform.patientname.focus();
			}
			
			var s=confirm('click "OK" to SUBMIT the Appointment form' )
			if(s==true){
				return true;
			}
			else{
				return false;
			}

				
			
		}
	function clearfun(x){
			document.body.style.backgroundImage="url('"+x.name+"')";
			var c=confirm('click "OK" to CLEAR ALL Details');
				if(c==true){
					return true;
				}
				else{
					return false;
				}
		}
	
		function handleSpecialistImage(x){
			document.body.style.backgroundImage="url('"+x+"')";
		}
		function change(a){
			a.style.color="black";
			a.style.backgroundColor="yellow";
		}
		function retain(b){
			b.style.color="black";
			b.style.backgroundColor="magenta";
		}
		function displayPresentTime(){
			setInterval(displayTime,1000);
		}
		function displayTime(){
			var d=new Date();
			var x=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
			var y=d.toLocaleTimeString();            
			document.getElementById("Time").innerHTML=x+"&nbsp &nbsp &nbsp"+y;

			}
		
		
