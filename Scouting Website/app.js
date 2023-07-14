function clearPitInput(){
    //store in varibles

   

    /*test var store

    console.log("Scouter Name: " + scouterName);
    console.log("Team Number: " + teamNumber);
    console.log("Drivetrain: " + drivetrain)
    console.log("Extra Info: " + extraInfo);
    console.log("Intake: " + intake);
    console.log("Other: " + otherintake);
    console.log(" ");*/

    //send info

    
    //clear in
    
    

}

function postData() {
    //
    
}

function submitPit(){
    clearPitInput();
    //postData();
}



////////////////////       ////////////////////                     MATCH                            ////////////////////////////////////
let valh = 0;
let symbol;
let valm = 0;
let vall = 0;
let m = 0;
let h = 0;
let l = 0;

let tvalh = 0;
let tsymbol;
let tvalm = 0;
let tvall = 0;
let tm = 0;
let th = 0;
let tl = 0;
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

    let ConeHt = document.getElementById('ConeHt').value;
    let ConeLt = document.getElementById('ConeLt').value;
    let ConeMt = document.getElementById('ConeMt').value;
    let CubeHt = document.getElementById('CubeHt').value;
    let CubeLt = document.getElementById('CubeLt').value;
    let CubeMt = document.getElementById('CubeMt').value;
    let charget = document.getElementById('Charget').value;
    let chargenumt = document.getElementById('chargenumt').value;




    //test var store
    console.log("ConeH: " + ConeH);
    console.log("ConeM: " + ConeM);
    console.log("ConeL: " + ConeL);
    console.log(" ");
    console.log("CubeH: " + CubeH);
    console.log("CubeM: " + CubeM);
    console.log("CubeL: " + CubeL);
    console.log(" ");
    console.log('Charge: ' + charge);
    console.log('Number charged: ' + chargenum);
    console.log(" ");

    console.log("ConeHt: " + ConeHt);
    console.log("ConeMt: " + ConeMt);
    console.log("ConeLt: " + ConeLt);
    console.log(" ");
    console.log("CubeHt: " + CubeHt);
    console.log("CubeMt: " + CubeMt);
    console.log("CubeLt: " + CubeLt);
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

    document.getElementById('ConeHt').value=null;
    document.getElementById('ConeLt').value=null;
    document.getElementById('ConeMt').value=null;
    document.getElementById('CubeHt').value=null;
    document.getElementById('CubeLt').value=null;
    document.getElementById('CubeMt').value=null;
    document.getElementById('Charget').value='False';
    document.getElementById('chargenumt').value=null;

    valh = 0;
    symbol
    valm = 0;
    vall = 0;
    m = 0;
    h = 0;
    l = 0;


    tvalh = 0;
    tsymbol;
    tvalm = 0;
    tvall = 0;
    tm = 0;
    th = 0;
    tl = 0;
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

    //clear the inputs
    
    document.getElementById("signupemail").value= " ";
    document.getElementById("signupname").value= " ";
    document.getElementById("1signuppassword").value= " ";
    document.getElementById("2signuppassword").value= " ";

    //check to see if user is made in data base

    window.location.href = "Home.html";
}
