let email:string="saukat@gmail.com";
let atpos:number=email.indexOf("@");
if(atpos==-1){
    console.log("Invalid Email");
}
else{
    console.log("Email varified...");
}
let emailId=email.substring(0,atpos);
let domain=email.substring(atpos+1);
console.log("Your Id="+emailId+"\n"+"Domain="+domain);

