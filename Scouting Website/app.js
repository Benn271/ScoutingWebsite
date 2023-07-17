/**
 * The code includes functions for clearing input fields, submitting form data, and manipulating match
 * and pit data in a JavaScript application.
 */
function clearPitInput(){
    //store in varibles

    let scouterName = document.getElementById('Scouter Name').value;
    let teamNumber = document.getElementById('Team Number').value;
    let extraInfo = document.getElementById('Extra Info').value;
    let drivetrain = document.getElementById('Drivetrain').value;
    let intake = document.getElementById('Intake').value;
    let otherintake = document.getElementById('other').value;
   
    /*test var store

    console.log("Scouter Name: " + scouterName);
    console.log("Team Number: " + teamNumber);
    console.log("Drivetrain: " + drivetrain)
    console.log("Extra Info: " + extraInfo);
    console.log("Intake: " + intake);
    console.log("Other: " + otherintake);
    console.log(" ");*/

    //send info

    
    //clear input

    document.getElementById('Scouter Name').value=' ';
    document.getElementById('Team Number').value=null;
    document.getElementById('Drivetrain').value='';
    document.getElementById('Extra Info').value=' ';
    document.getElementById('Intake').value='None';
    document.getElementById('other').value=' ';
    
    

}

function postData() {
    //
    
}

function submitPit(){
    clearPitInput();
    //postData();
}



////////////////////       ////////////////////                     MATCH                            ////////////////////////////////////
let symbol;
let valh = 0;
let valm = 0;
let vall = 0;
let h = 0;
let m = 0;
let l = 0;
let m1a = 0;
let m2a = 0;


let tsymbol;
let tvalh = 0;
let tvalm = 0;
let tvall = 0;
let th = 0;
let tm = 0;
let tl = 0;
let m1t = 0;
let m2t = 0;


function clearMatchInput(){
    //store in varibles
    let ConeH = document.getElementById('ConeH').value;
    let ConeL = document.getElementById('ConeL').value;
    let ConeM = document.getElementById('ConeM').value;
    let CubeH = document.getElementById('CubeH').value;
    let CubeL = document.getElementById('CubeL').value;
    let CubeM = document.getElementById('CubeM').value;
    let charge = document.getElementById('Charge').value;
    let chargenum = document.getElementById('chargenum').value;
    let Missed1A = document.getElementById('Missed1A').value;
    let Missed2A = document.getElementById('Missed2A').value;


    let ConeHt = document.getElementById('ConeHt').value;
    let ConeLt = document.getElementById('ConeLt').value;
    let ConeMt = document.getElementById('ConeMt').value;
    let CubeHt = document.getElementById('CubeHt').value;
    let CubeLt = document.getElementById('CubeLt').value;
    let CubeMt = document.getElementById('CubeMt').value;
    let charget = document.getElementById('Charget').value;
    let chargenumt = document.getElementById('chargenumt').value;
    let Missed1T = document.getElementById('Missed1T').value;
    let Missed2T = document.getElementById('Missed2T').value;





    //test var store
    console.log("ConeH: " + ConeH);
    console.log("ConeM: " + ConeM);
    console.log("ConeL: " + ConeL);
    console.log("Missed1A: " + Missed1A);
    console.log(" ");
    console.log("CubeH: " + CubeH);
    console.log("CubeM: " + CubeM);
    console.log("CubeL: " + CubeL);    
    console.log("Missed2A: " + Missed2A);
    console.log(" ");
    console.log('Charge: ' + charge);
    console.log('Number charged: ' + chargenum);
    console.log(" ");

    console.log("ConeHt: " + ConeHt);
    console.log("ConeMt: " + ConeMt);
    console.log("ConeLt: " + ConeLt);
    console.log("Missed1T: " + Missed1T);
    console.log(" ");
    console.log("CubeHt: " + CubeHt);
    console.log("CubeMt: " + CubeMt);
    console.log("CubeLt: " + CubeLt);    
    console.log("Missed2T: " + Missed2T);
    console.log(" ");
    console.log('Charget: ' + charget);
    console.log('Number chargedt: ' + chargenumt);
    console.log(" ");
    console.log(" ");


    //clear input
    document.getElementById('ConeH').value=null;
    document.getElementById('ConeL').value=null;
    document.getElementById('ConeM').value=null;
    document.getElementById('CubeH').value=null;
    document.getElementById('CubeL').value=null;
    document.getElementById('CubeM').value=null;
    document.getElementById('Charge').value='False';
    document.getElementById('chargenum').value=null;
    document.getElementById('Missed1A').value=null;
    document.getElementById('Missed2A').value=null;


    document.getElementById('ConeHt').value=null;
    document.getElementById('ConeLt').value=null;
    document.getElementById('ConeMt').value=null;
    document.getElementById('CubeHt').value=null;
    document.getElementById('CubeLt').value=null;
    document.getElementById('CubeMt').value=null;
    document.getElementById('Charget').value='False';
    document.getElementById('chargenumt').value=null;    
    document.getElementById('Missed1T').value=null;
    document.getElementById('Missed2T').value=null;


    symbol;    
    valh = 0;
    valm = 0;    
    vall = 0;    
    h = 0;
    m = 0;
    l = 0;
    m1a = 0;
    m2a = 0;

    tsymbol;   
    tvalh = 0;
    tvalm = 0;
    tvall = 0;   
    th = 0;
    tm = 0;
    tl = 0;
    m1t = 0;
    m2t = 0;
}

function submitMatch(){
    //exportMatchInfo();
    clearMatchInput();
 }

///////////////////////////////////////////////


//Auto

let hCone = (symbol) => {
    if(symbol === '+'){
        tvalh++;
        document.getElementById('ConeH').value = tvalh;
    }else if(symbol === '-'){
        tvalh--;
        document.getElementById('ConeH').value = tvalh;
    }
    
}
let mCone = (symbol) => {
    if(symbol === '+'){
        valm++;
        document.getElementById('ConeM').value = valm;
    }else if(symbol === '-'){
        valm--;
        document.getElementById('ConeM').value = valm;
    }
    
}

let lCone = (symbol) => {
    if(symbol === '+'){
        vall++;
        document.getElementById('ConeL').value = vall;
    }else if(symbol === '-'){
        vall--;
        document.getElementById('ConeL').value = vall;
    }
    
}

let hCube = (symbol) => {
    if(symbol === '+'){
        h++;
        document.getElementById('CubeH').value = h;
    }else if(symbol === '-'){
        h--;
        document.getElementById('CubeH').value = h;
    }
    
}

let mCube = (symbol) => {
    if(symbol === '+'){
        m++;
        document.getElementById('CubeM').value = m;
    }else if(symbol === '-'){
        m--;
        document.getElementById('CubeM').value = m;
    }
    
}

let lCube = (symbol) => {
    if(symbol === '+'){
        l++;
        document.getElementById('CubeL').value = l;
    }else if(symbol === '-'){
        l--;
        document.getElementById('CubeL').value = l;
    }
    
}

let Missed1A = (symbol) => {
    if(symbol === '+'){
        m1a++;
        document.getElementById('Missed1A').value = m1a;
    }else if(symbol === '-'){
        m1a--;
        document.getElementById('Missed1A').value = m1a;
    }
    
}

let Missed2A = (symbol) => {
    if(symbol === '+'){
        m2a++;
        document.getElementById('Missed2A').value = m2a;
    }else if(symbol === '-'){
        m2a--;
        document.getElementById('Missed2A').value = m2a;
    }
    
}


//////////////////////////////////////////////////////////////////////

//Teleop



let thCone = (tsymbol) => {
    if(tsymbol === '+'){
        tvalh++;
        document.getElementById('ConeHt').value = tvalh;
    }else if(tsymbol === '-'){
        tvalh--;
        document.getElementById('ConeHt').value = tvalh;
    }
    
}

let tmCone = (tsymbol) => {
    if(tsymbol === '+'){
        tvalm++;
        document.getElementById('ConeMt').value = tvalm;
    }else if(tsymbol === '-'){
        tvalm--;
        document.getElementById('ConeMt').value = tvalm;
    }
    
}

let tlCone = (tsymbol) => {
    if(tsymbol === '+'){
        tvall++;
        document.getElementById('ConeLt').value = tvall;
    }else if(tsymbol === '-'){
        tvall--;
        document.getElementById('ConeLt').value = tvall;
    }
    
}

let thCube = (tsymbol) => {
    if(tsymbol === '+'){
        th++;
        document.getElementById('CubeHt').value = th;
    }else if(tsymbol === '-'){
        th--;
        document.getElementById('CubeHt').value = th;
    }
    
}

let tmCube = (tsymbol) => {
    if(tsymbol === '+'){
        tm++;
        document.getElementById('CubeMt').value = tm;
    }else if(tsymbol === '-'){
        tm--;
        document.getElementById('CubeMt').value = tm;
    }
    
}

let tlCube = (tsymbol) => {
    if(tsymbol === '+'){
        tl++;
        document.getElementById('CubeLt').value = tl;
    }else if(tsymbol === '-'){
        tl--;
        document.getElementById('CubeLt').value = tl;
    }
    
}

let Missed1T = (tsymbol) => {
    if(tsymbol === '+'){
        m1t++;
        document.getElementById('Missed1T').value = m1t;
    }else if(tsymbol === '-'){
        m1t--;
        document.getElementById('Missed1T').value = m1t;
    }
    
}

let Missed2T = (tsymbol) => {
    if(tsymbol === '+'){
        m2t++;
        document.getElementById('Missed2T').value = m2t;
    }else if(tsymbol === '-'){
        m2t--;
        document.getElementById('Missed2T').value = m2t;
    }
    
}



//////////////////////// Login / Sign up ///////////////////////////////////////////////////////////////////////////////


let submitLog = () => {
    //store inputs

    let emailL = document.getElementById("loginemail").value;
    let usernameL = document.getElementById("loginname").value;
    let paswordL = document.getElementById("1loginpassword").value;

    //print inputs to console will later export them to a database

    console.log("Login Email: " + emailL);
    console.log("Login Username: " + usernameL);
    console.log("Login Password: " + paswordL);

    //clear the inputs
    
    document.getElementById("loginemail").value= " ";
    document.getElementById("loginname").value= " ";
    document.getElementById("1loginpassword").value= " ";

    //check to see if user is made in data base

    
    /* `window.location.href = "Home.html";` is used to redirect the user to the "Home.html" page. It
    changes the current URL of the browser to the specified URL, causing the browser to load the new
    page. */
    window.location.href = "Home.html";

}



/**
 * The function `submitSign` is used to store user inputs, print them to the console, clear the inputs,
 * and redirect the user to the "Home.html" page.
 */
let submitSign = () => {
    //store inputs

    let emailS = document.getElementById("signupemail").value;
    let usernameS = document.getElementById("signupname").value;
    let paswordS1 = document.getElementById("1signuppassword").value;
    let paswordS2 = document.getElementById("2signuppassword").value;

    //print inputs to console will later export them to a database

    console.log("Login Email: " + emailS);
    console.log("Login Username: " + usernameS);
    console.log("Login 1Password: " + paswordS1);
    console.log("Login 2Password: " + paswordS2);
discord

    //clear the inputs
    
    document.getElementById("signupemail").value= " ";
    document.getElementById("signupname").value= " ";
    document.getElementById("1signuppassword").value= " ";
    document.getElementById("2signuppassword").value= " ";

    //check to see if user is made in data base

    window.location.href = "Home.html";
}