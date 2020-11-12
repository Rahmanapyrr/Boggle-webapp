// window.addEventListener("hashchange", function() {
//     scrollBy(0, -55);
// });

particlesJS("particles-js", {
    particles: {
        number: { value: 150, density: { enable: true, value_area: 1000 } },
        color: { value: "#FF0000" },
        shape: {
            type: "circle",
            stroke: { width: 2.5, color: "#FFF9DA" },
            polygon: { nb_sides: 10 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: true }
        },
        size: {
            value: 0.8,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.8,
            width: 3
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: { enable: true, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "repulse" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 300, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 350, duration: 0.15 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});