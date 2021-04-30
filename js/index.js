let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.56, lng: 138.56 },
        zoom: 8,
    });
}

window.onload = function () {
    const homeIndex = document.getElementById('homeIndex');
    const resumeIndex = document.getElementById('resumeIndex');
    const projectsIndex = document.getElementById('projectsIndex');
    const contactIndex = document.getElementById('contactIndex');
    const contentList = document.getElementsByClassName('content');
    contentList[0].style.display = "block";
    const i = contentList.length;
    const sideBar = document.getElementById('nav__sidebar');


    console.log(document.body.clientWidth);



    homeIndex.addEventListener('click', function () {
        console.log('home');
        contentList[0].style.display = "block";
        contentList[1].style.display = "none";
        contentList[2].style.display = "none";
        contentList[3].style.display = "none";
    });
    resumeIndex.addEventListener('click', function () {
        console.log('resume');
        contentList[0].style.display = "none";
        contentList[1].style.display = "block";
        contentList[2].style.display = "none";
        contentList[3].style.display = "none";
    });
    projectsIndex.addEventListener('click', function () {
        console.log('projects');
        contentList[0].style.display = "none";
        contentList[1].style.display = "none";
        contentList[2].style.display = "block";
        contentList[3].style.display = "none";
    });
    contactIndex.addEventListener('click', function () {
        console.log('contact');
        contentList[0].style.display = "none";
        contentList[1].style.display = "none";
        contentList[2].style.display = "none";
        contentList[3].style.display = "block";
    });


    const btn = document.getElementById('btn');

    btn.addEventListener('click', function () {
        if (sideBar.style.display === "block") {
            sideBar.style.display = "none";
        }
        else { sideBar.style.display = "block"; }
    }
    );



    const list = Array.from(sideBar.querySelectorAll('li'));
    for (let j in list) {
        list[j].index = j;
    }
    sideBar.addEventListener('click', function (e) {
        const item = e.target;
        for (let m = 0; m < i; m++) {
            contentList[m].style.display = "none";
        }
        contentList[item.index].style.display = "block";

    }, false);
}