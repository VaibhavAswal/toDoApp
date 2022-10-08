//function to calculate day
setInterval(time, 1000);
function time() {
    let curretnTime = new Date();
    let hrs = curretnTime.getHours();
    let mnts = curretnTime.getMinutes();
    let ampm = 'AM'
    let day = curretnTime.getUTCDay();
    let date = curretnTime.getDate();
    let month = curretnTime.getMonth();
    
    if (hrs>12){
        hrs = hrs-12;
        ampm = 'PM'
    }

    if (hrs==0){
        hrs = 12;
    }

    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];

    document.getElementById('time').innerHTML = '<h2>' + hrs + ':' + mnts + ' ' + ampm + '<br>' + days[day] + ', ' + months[month]+ ' ' + date +'</h2>';
}

window.onload = function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=fff95e0d642069aafe26b4250714b9bd')
    .then(response => response.json())
    .then(data => {
    let temp = data['main']['temp'];
    let desc = data['weather'][0]['main'];
    temp = temp-273.15;
    temp = Math.round(temp*100)/100;
    console.log(`Kehndi hundi sii chl chemistry pdha de
    Chemistry psnd menu preparation krade
    Physical se jaddo aage bdhugi
    P block aauga ta pta laguga
    Science de rahaan vich tur ke reh gye haan 
    rishtedaraan de taane leke Hans k seh ge haan
    Saade nerd hone pe o hasde rhende
    jado IIT nikluga ta pta lguga
    Oo kendi hundi si school bunk kara de,
    bike pasand ni mennu car te ghuma de,
    odho TC vich joddo apna name likhegi,
    jb restricte ho jaugi jb pata laguga
    rate my lyrics follow @that_back.bencher on instagram to rate
    (girls ko follow back milega)`);
    document.getElementById('temp').innerHTML = temp + '° C<br><span></span>' + desc;
    })
    document.getElementById('list').innerHTML = localStorage.getItem('data');
    if(localStorage.getItem('count')){
        count = localStorage.getItem('count');
        count = Number(count);
    }
    else {
        count = 1;
        count = Number(count);
    }
}


function deleteAll() {
    swal({
        title: "Are you sure to delete all tasks?",
        text: "Once deleted, you will not be able to recover the tasks!",
        icon: "error",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Your task list has been cleared!", {
            icon: "success",
          });
          localStorage.setItem('data', '');
          localStorage.setItem('count', 1);
          count = 1
          document.getElementById('list').innerHTML = '';
        }
        }
      );
}

function Delete(id) {
    if(confirm("Are you sure to delete this task?")==true) {
        document.getElementById('task'+id).remove();
        localStorage.setItem('data', document.getElementById('list').innerHTML);
    }
}

function addTask() {
    if (document.getElementById('text').value) {
    document.getElementById('list').innerHTML =  document.getElementById('list').innerHTML + '<li id="task' + count + '"><i class="uil uil-circle" id="n' + count + '" onclick=done(this.id)></i><i class="uil uil-check-circle displayNone" id="d' + count + '" onclick=notDone(this.id)></i> <p id="t' + count + '"class="active">' + document.getElementById("text").value + '</p><i class="uil uil-trash delete" id=' + count + ' onclick=Delete(this.id);></i></li>'
    document.getElementById("text").value = '';
    count = count+1 
    localStorage.setItem('count', count);
    addLocal();
}}

function addLocal() {
    localStorage.setItem('data', document.getElementById('list').innerHTML);
}

function done(a) {
    a.split('')
    document.getElementById('n'+a[1]).classList.add('displayNone');
    document.getElementById('d'+a[1]).classList.remove('displayNone');
    document.getElementById('t'+a[1]).classList.add('inactive');
    document.getElementById('t'+a[1]).classList.remove('active');
    localStorage.setItem('data', document.getElementById('list').innerHTML);
}

function notDone(a) {
    document.getElementById('d'+a[1]).classList.add('displayNone');
    document.getElementById('n'+a[1]).classList.remove('displayNone');
    document.getElementById('t'+a[1]).classList.remove('inactive');
    document.getElementById('t'+a[1]).classList.add('active');
    localStorage.setItem('data', document.getElementById('list').innerHTML);
}


addEventListener('keypress', e => {if (e.key==='Enter') {
    addTask();
}
});

 
