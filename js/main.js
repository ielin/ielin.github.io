const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.add("hidden");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((items) => observer.observe(items));

const fullImgBox = document.getElementById('fullImgBox');
const fullImg = document.getElementById('fullImg');

function openFullImg(imgSrc)
{
  fullImgBox.style.display = "flex";
  fullImg.src = imgSrc
}

function closeFullImg()
{
  fullImgBox.style.display = "none";
}