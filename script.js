//cursor animation
function canimation(){
    let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main");

const score = document.querySelector(".score");
const rating = document.querySelectorAll("rating input");

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
});

main.addEventListener("mousemove", function(dets){
    
gsap.to(cursor, {
    x:dets.x+10,
    y:dets.y+10,
    duration:2,
    ease: "elastic.out",
})
})
}
canimation()

// moving animation 
window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
      gsap.to(".marque img",{
          rotate:0,
          duration:0.6,
      })
  
      gsap.to(".marque", {
        transform: `translateX(-200%)`,
        // delay:1,
        duration: 4,
        repeat: -1,
        ease: "none",
      });
    } else {
      gsap.to(".marque img",{
          rotate:180,
          duration:0.6,
      })
  
      gsap.to(".marque", {
          transform: `translateX(0)`,
          // delay:1,
          duration: 4,
          repeat: -1,
          ease: "none",
        });
    }
  });
  
rating.forEach(rating => {
  rating.addEventListener("change", () => {
    const selectedRating = rating.value;

    const text = selectedRating === "1" ? 'star' : 'stars';

    score.textContent = `${selectedRating} ${text} rating.`;
    });
});
