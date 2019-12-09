var email = "saukat@gmail.com";
var atpos = email.indexOf("@");
if (atpos == -1) {
    console.log("Invalid Email");
}
else {
    console.log("Email varified...");
}
var emailId = email.substring(0, atpos);
var domain = email.substring(atpos + 1);
console.log("Your Id=" + emailId + "\n" + "Domain=" + domain);
