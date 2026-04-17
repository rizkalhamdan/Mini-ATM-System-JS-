/*

Al: 22:41 17.04.2026
  COPS kernel .. April OS (old version) .. Open source

  Fix some bugs .. Make it more reposne and stroge

  * Al passed here *

*/


let BO = document.getElementById("BODY")
let AllLinks = COPSPrograms // Change CadoaLonks varible
let filenotfound = ""
let lasts = []

let lastApp = ""

function exit(ur) {
  
}

function COPSHome() {
  BO.style.left="100%"
  setTimeout(function() {
    BO.querySelector(`#${lastApp}id`).style.opacity = 0;
    BO.querySelector(`#${lastApp}id`).style.scale = 0;
    
  }, COPSTransition)
  
  my('c')
  cbo.hide()
}



function COPSIsExist(program) {
  let res = false
  AllLinks.forEach((e)=> (e==program)?res=true:0)
  return res
}

function COPSIsLast(program) {
  let res = false
  lasts.forEach(function(e) {
    (e==program)?res=true:0
  })
  return res
}

function COPSMove(OriginalUrl) {
  let url = OriginalUrl;
  // Moving
  if (COPSIsExist(url)) {
    //BO.innerHTML = ""; // For any script other (OS)
    // OS First step
    if(!COPSIsLast(url)) { // New open
      var scri = document.createElement("script")
      scri.src = `/data/resources/${url}/${url}reas.js`
      BO.append(scri);
      // OS second step
      setTimeout(function() {
        BO.innerHTML += reas.content;
        var scrimain = document.createElement("script");
        scrimain.src = `/data/resources/${url}/${url}.js`;
        BO.append(scrimain)
        lastApp = url;
        lasts.push(url);
        COPSRefresh(url);
      }, 200)
    } else {
      // Old open
      lastApp = url
      COPSRefresh(url)
    }
    

  } else {
    
  }
  
  //COPSRefresh()
}

function COPBack() {
  
}

function COPSRefresh(err) {
  scroll(top)
  osTB(false)
  osCbHide(true)
  my('c')
  cbo.hide()
  
  // styling
  if(lastApp==err){
    BO.querySelector(`#${lastApp}id`).style.opacity = 1;
    BO.querySelector(`#${lastApp}id`).style.scale = 1;
    BO.querySelector(`#${lastApp}id`).style.position = "absolute";
    BO.querySelector(`#${lastApp}id`).style.top = "0";
    BO.querySelector(`#${lastApp}id`).style.left = "0";
    BO.style.left = "0%"
    BO.style.top = "0%"
  }
}

function COPSOff() {
  COPSStatus = false
  localStorage.COPSStatus = false
  location.pathname = "/"
}



function my(c) {
  if(c == 'c') {
    // close my
    document.getElementById("myid").style.bottom = "-100%"
    //osTB(false)
    osCbHide(true)
  } else {
    // open my
    osTB(false);
    osCbHide(false);
    document.getElementById("myid").style.bottom = "-42%";
    document.getElementById("myid").classList.add("openmy");
    setTimeout(function() {
      document.getElementById("myid").style.bottom = "0%";
      document.getElementById("myid").classList.toggle("openmy");
    }, COPSTransition*4)
    
  }
  
  cbo.hide()
}

// setTimeout(()=>my('c'), 4600)