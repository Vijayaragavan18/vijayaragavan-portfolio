document.addEventListener("DOMContentLoaded", () => {

    const devSec = document.querySelectorAll(".devCetagory");

    const TwoBtn = document.querySelectorAll(".projectPop");
    const ThreeBtn = document.querySelectorAll(".catLink");


    const devBtn = document.querySelectorAll(".btnDev");


    devBtn.forEach((item, index) => {

        item.addEventListener('click', () => {
            devSec.forEach((e) => {
                e.classList.remove("active");
            });

            devSec[index].classList.add("active");
            TwoBtn.forEach((e) => {
                e.classList.remove("one");

            });

            ThreeBtn.forEach((e) => {
                e.classList.remove("btnActive");

            })

            ThreeBtn[index].classList.add("btnActive");


        });


    });


    const oneBtn = document.querySelectorAll(".oneBtn");

    const close = document.querySelectorAll(".close");
    oneBtn.forEach((item, inde) => {
        item.addEventListener('click', () => {
            TwoBtn.forEach((e) => {
                e.classList.remove("one");

                close.forEach((i, j) => {
                    i.addEventListener('click', () => {
                        e.classList.remove("one");
                    });
                });
            });

            TwoBtn[inde].classList.add("one");
        });

    })




    document.getElementById('Projects').addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.getElementById('project');


        target.scrollIntoView({
            behavior: 'smooth'
        });


        target.classList.add('highlight');

        setTimeout(() => {
            target.classList.remove('highlight');
        }, 2000);
    });
    document.getElementById('Skills').addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.getElementById('Skill');


        target.scrollIntoView({
            behavior: 'smooth'
        });


        target.classList.add('highlight');

        setTimeout(() => {
            target.classList.remove('highlight');
        }, 2000);
    });
    document.getElementById('Abouts').addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.getElementById('About');


        target.scrollIntoView({
            behavior: 'smooth'
        });


        target.classList.add('highlight');

        setTimeout(() => {
            target.classList.remove('highlight');
        }, 2000);
    });
    document.getElementById('Profiles').addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.getElementById('profile');


        target.scrollIntoView({
            behavior: 'smooth'
        });


        target.classList.add('highlight');

        setTimeout(() => {
            target.classList.remove('highlight');
        }, 2000);
    });

    document.querySelectorAll('#Contacts').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.getElementById('Contact');


            target.scrollIntoView({
                behavior: 'smooth'
            });


            target.classList.add('highlight');

            setTimeout(() => {
                target.classList.remove('highlight');
            }, 2000);
        });
    });





});