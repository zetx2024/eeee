const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const rate = document.getElementById("rate");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
	{
		photo:
			'url("https://yrjournal.org/testimonialimg/naira.PNG)',
		name: "Syeda Naira Noor Afsar",
		rate: "★★★★★",
		profession: "Birshreshtha Munshi Abdur Rouf Public College",
		description:
			"I think YRJ was a amazing experience and overall a amazing program all together, I have learned a lot from it, and I'm sure with the things I learned from this program will help me in the long run in many ways !"
	},

	{
		photo:
			"url('https://yrjournal.org/testimonialimg/mur.jpg')",
		name: "Anusheh Mur",
		rate: "★★★★★",
		profession: "Dinajpur Laboratory school and college",
		description:
			"The program overall was excellent. I believe that this is a great opportunity for the young generation to gain access to different fields of research."
	},

	{
		photo:
			"url('https://yrjournal.org/testimonialimg/hamzha.jpg')",
		name: "Aosaf Mohammad Hamzha ",
		rate: "★★★★☆",
		profession: "Presidency International School",
		description:
			"I was a very great experience and I would like to do more research programs in the future."
	},

	{
		photo:
			"url('https://yrjournal.org/testimonialimg/shuvojeet.jpg')",
		name: "Shuvojeet Sarker",
		rate: "★★★★★",
		profession: "Rajuk Uttara Model College",
		description:
			"Participating in the YRJ program was a transformative experience. While I entered with a solid understanding of research fundamentals, the program broadened my perspective in unexpected ways. I gained deeper insights into advanced methodologies, learned to approach problems from different angles, and appreciated the importance of collaboration in research. The mentorship and resources provided by YRJ were invaluable, pushing me to think critically and creatively. I now feel more confident and prepared to pursue research at a higher level, and I'm grateful to YRJ for this opportunity to grow both academically and personally."
	},

	{
		photo:
			"url('https://yrjournal.org/testimonialimg/szannatul.jpeg')",
		name: "Zannatul Shariar Audri",
		rate: "★★★★★",
		profession: "Scholastica",
		description:
			"I found the youth research journal’s summer research project to be truly ingenious and an excellent addition to my extracurricular activities. The depth and originality of the organization’s work are impressive. However, I believe the sessions could be even more effective if they were slightly shorter and scheduled at an earlier time. ."
	},

	{
		photo:
			"url('https://yrjournal.org/testimonialimg/taief.jpg')",
		name: "Tanvin Hasan Taief",
		rate: "★★★★☆",
		profession: "Dhaka City College",
		description:
			"This research program helped me a lot to understand the fundamental of research and organizing in a effective way. It encouraged me to dive into the sea of knowledge. It helped me to find some particular problem's solving method very easy way."
	},

	{
		photo:
			"url('https://yrjournal.org/testimonialimg/snaziba.jpg')",
		name: "Naziba Sayem",
		rate: "★★★★☆",
		profession: "Mastermind English Medium School ",
		description:
			"It was a good program with amazing mentorship. What I appreciated most was Shanto bhaiya's willingness to talk to groups one-on-one so that specific problems can be discussed."
	},
	{
		photo:
			"url('https://yrjournal.org/testimonialimg/anitas.jpg')",
		name: "Anita Sheikh",
		rate: "★★★★☆",
		profession: "Private Student",
		description:
			"Well it was a really great experience. Most important thing is i got to learn something new and really useful."
	}


];

imgDiv.style.backgroundImage = people[0].photo;
rate.innerText = people[0].rate;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 7) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 7;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
	if (chicken.style.opacity === "0") {
		chicken.style.opacity = "1";
		imgDiv.classList.add("move-head");
		surpriseMeBtn.innerText = "Remove the chicken";
		surpriseMeBtn.classList.remove("surprise-me-btn");
		surpriseMeBtn.classList.add("hide-chicken-btn");
		isChickenVisible = true;
	} else if (chicken.style.opacity === "1") {
		chicken.style.opacity = "0";
		imgDiv.classList.remove("move-head");
		surpriseMeBtn.innerText = "Surprise me";
		surpriseMeBtn.classList.add("surprise-me-btn");
		surpriseMeBtn.classList.remove("hide-chicken-btn");
		isChickenVisible = false;
	}
});

window.addEventListener("resize", () => {
	description.style.height = "100%";
});
