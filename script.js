console.log("Welcome in Student report card Assignment 2 By Hardeek Karkare");

function myFun(){

    // Fetching the names of the forms
    const name = document.getElementById('name').value;
    const fname = document.getElementById('fname').value;
    const insname = document.getElementById('insname').value;
    const bname = document.getElementById('bname').value;

    // Representing them on the Table:
    document.getElementById('demoname').innerHTML = name;
    document.getElementById('demofname').innerHTML = fname;
    document.getElementById('demoins').innerHTML = insname;
    document.getElementById('demobatch').innerHTML = bname;

    // Marks of subjects:
    const ipmarks = document.getElementById('ipmarks').value;
    const semarks = document.getElementById('semarks').value;
    const cnsmarks = document.getElementById('cnsmarks').value;
    const ebismarks = document.getElementById('ebismarks').value;
    const admtmarks = document.getElementById('admtmarks').value;

    document.getElementById('demooffice').innerHTML = ipmarks;
    document.getElementById('demoweb').innerHTML = cnsmarks;
    document.getElementById('demoit').innerHTML = semarks;
    document.getElementById('democ').innerHTML = ebismarks;

    if(ipmarks < 35){
        document.getElementById('demooffice').style.backgroundColor = "red";
    } 
    if(semarks < 35){
        document.getElementById('demoweb').style.backgroundColor = "red";
    } 
    if(cnsmarks < 35){
        document.getElementById('demoit').style.backgroundColor = "red";
    } 
    if(ebismarks < 35){
        document.getElementById('democ').style.backgroundColor = "red";
    } 
    if(admtmarks < 35){
        document.getElementById('demooffice').style.backgroundColor = "red";
    } 

    let marks1 = parseInt(ipmarks);
    let marks2 = parseInt(semarks);
    let marks3 = parseInt(cnsmarks);
    let marks4 = parseInt(ebismarks);
    let marks5 = parseInt(admtmarks);

    const evaluation = (marks1 + marks2 + marks3 + marks4 + marks5);
    console.log(evaluation);

    const newEvaluation = (evaluation * 100 )/500;
    
    switch (newEvaluation) {

        case newEvaluation<35:
            document.getElementById('demograde').innerHTML = "Fails";
            document.getElementById('demograde').style.backgroundColor = 'red';
            break;
    
        default:
            document.getElementById("demograde").innerHTML = "Pass";
            document.getElementById('demograde').style.backgroundColor = "green";
            break;
    }
    

    document.getElementById('demototal').innerHTML = evaluation;
    document.getElementById('demoper').innerHTML = (evaluation*100)/500;
}