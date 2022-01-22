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
    console.log(`You call me on the telephone, you feel so far away
    You tell me to come over, there's some games you want to play
    I'm walking to your house, nobody's home
    Just me and you and you and me alone
    We're just playing hide and seek
    It's getting hard to breathe under the sheets with you
    I don't want to play no games
    I'm tired of always chasing, chasing after you
    I don't give a fuck about you anyways
    Whoever said I gave a shit 'bout you?
    You never share your toys or communicate
    I guess I'm just a play date to you
    Wake up in your bedroom and there's nothing left to say
    When I try to talk you're always playing board games
    I wish I had monopoly over your mind
    I wish I didn't care all the time
    We're just playing hide and seek
    It's getting hard to breathe under the sheets with you
    I don't want to play no games
    I'm tired of always chasing, chasing after you
    I don't give a fuck about you anyways
    Whoever said I gave a shit 'bout you?
    You never share your toys or communicate
    I guess I'm just a play date to you
    Ring around the rosy
    I never know, I never know what you need
    Ring around the rosy, I want to give you, want to give you
    What you need
    I don't give a fuck about you anyways
    Whoever said I gave a shit 'bout you?
    You never share your toys or communicate
    I guess I'm just a play date to you
    You know I give a fuck about you everyday
    Guess it's time that I tell you the truth
    If I share my toys, will you let me stay?
    Don't want to leave this play date with you
    Source: LyricFind
    Songwriters: Jennifer Decilveo / Melanie Martinez
    Play Date lyrics © BMG Rights Management, Warner Chappell Music, Inc
    तेरे मेरे होठों पे,
मीठे मिले गीत मितवा
आगे बढ़े चले हम
पिछे पिछे प्रीत मितवा
तेरे मेरे होठों पे,
मीठे मिले गीत मितवा
आगे बढ़े चले हम
पिछे पिछे प्रीत मितवा


पहले पहले प्यार की
पहली रात याद रहेगी
फूलो से इस शहर की
मुलकत याद रहेगी
काश यही साड़ी उमर,
यू ही जाए बिट मितवा
आगे बढ़े चले हम
पिछे पिछे प्रीत मितवा


अखियो में भी बस जा,
आखिया मैं बैंड कर लू
अखियो में भी बस जा,
आखिया मैं बैंड कर लू
पहले इन आखियो से,
बटे मैं चांद कर लू
तेरी सराय ही बातो ने,
लिया मुझे जीत मितवा
आगे बढ़े चले हम
पिछे पिछे प्रीत मितवा


छोटे छोटे दिन रात
छोटे छोटे दिन रात
लैंबी लांबी बाते है
जलदी हैं किस बात की,
बड़ी मुलकते है
बातो मुलकातो में
उमर जाए बीट मितवा
आगे बढ़े चले हम
पिछे पिछे प्रीत मितवा


तेरे मेरे होठों पे,
मीठे मिले गीत मितवा
आगे बढ़े चले हम
पिछे पिछे प्रीत मितवा
आगे बढ़े चले हम
पिछे पिछे प्रीत मितवा
आगे बढ़े चले हम
पिछे पिछे प्रीत मितवा।`);
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

 
