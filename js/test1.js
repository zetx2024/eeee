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
        "url('https://yrjournal.org/testimonialimg/MorsalinaC.jpg')",
      name: "Morsalina Chowdhory Madhabi",
      rate: "★★★★",
      profession: "Liceo Scientifico Francesco D’assisi",
      grade: "Class 11",
      programs: "Spring Research Program 2025",
      country: "Italy",
      description:
        "It was such pleasure to work with you all. But I wish we had more time to complete the assignments as most of us are beginners. It would have been much better and beginner friendly in that way. But the overall experience was so good and the people organizing it were so friendly and nice. I will say these people are so dedicated individuals."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/LRupkotha.jpeg')",
      name: "Lamisa Sakhawat",
      rate: "★★★★",
      profession: "Viqarunnisa Noon School and College",
      grade: "Class 12",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "This research program was incredibly resourceful. It provided valuable materials and more importantly helped me build skills that will be highly beneficial in my future endeavours. Highly recommend to beginners."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/MridulHasan.jpeg')",
      name: "MD Mridul Hasan",
      rate: "★★★★",
      profession: "Dhaka College",
      grade: "Gap year",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "Jumped into research with zero experience—and YRJ made it feel possible. From the basics to building something real, every step was guided and supportive. Grateful for the learning, the people, and the journey."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/NaimMolla.JPG')",
      name: "Md. Naim Molla",
      rate: "★★★★",
      profession: "Notre Dame College, Dhaka",
      grade: "Class 12",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "This is my 2nd time taking part in a program of YRJ and from my little experience, I can affirm their glaring future accelerated by the tireless toils of a small group of individuals. I hope this concept that high school students can also conduct research, will bring about an immeasurable revolution in our country, specially among the lower grade student bodies."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/AhnafAhmed.jpeg')",
      name: "Ahnaf Ahmed",
      rate: "★★★★",
      profession: "Academia",
      grade: "A Level",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "This program has instilled within me a newfound thirst for knowledge and provided me with the tools necessary to satiate my curiosity. The mentors and instructors are extremely knowledgeable and experienced and have helped me whenever possible throughout the entirety of the program. Overall, I can confidently say that I have benefitted and become an improved individual after enrolling in this program."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/LaaibahSarrinah.jpeg')",
      name: "Laaibah Sarrinah Islam",
      rate: "★★★★",
      profession: "Presidency International School",
      grade: "Class 8",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "For me, this educational program was a whole new experience.   I learnt a good bit of new information while taking this class, and I thought the teacher's approach to teaching was really helpful.   I hope to have the opportunity to work on more research projects like this in the future."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/SupritiBarua.jpg')",
      name: "Supriti Barua",
      rate: "★★★★★",
      profession: "Chittagong Cantonment Public College",
      grade: "Class 11",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "Taking part in this research program has been a wonderful experience for me. I have learned so many things like how to think critically and discover topics in depth. Although I was new to research, this opportunity helped me understand the basics of writing research paper and improved my confidence. Overall, it was a meaningful and enriching experience."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/TasfiahKhan.jpg')",
      name: "Tasfiah Khan",
      rate: "★★★★★",
      profession: "Birshreshtha Noor Mohammad Public College",
      grade: "Class 10",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "It is an extraordinarily well organized program that helps students learn about the in depths of research in a really engaging manner. The program's project based teaching method not only helps learning theoretical components of research effectively but also helps in learning how to implement them . Overall , a very recommended program."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/AfifRahaman.jpg')",
      name: "Muhammad Afif Rahaman Tasnim",
      rate: "★★★★",
      profession: "Dhaka College",
      grade: "Class 11",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "I think if people take this program seriously and try to learn from it, they will definitely get the most out of it. Beginner researchers will get to be familiar with research, while experienced researchers can improve their skills drastically."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/FaribtaZaman.jpeg')",
      name: "Faribta Zaman",
      rate: "★★★★",
      profession: "Birshreshtha Noor Mohammad Public College",
      grade: "Class 12",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "This research program offered an introductory overview of the field, with access to relevant resources and opportunities to develop foundational skills. The experience was informative and served as a practical starting point for those beginning to engage with academic work or consider future research goals."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/Ramisa.jpg')",
      name: "Amaara Zahid Ramisa",
      rate: "★★★★★",
      profession: "Milestone School and College",
      grade: "Class 8",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "Being part of the YRJ Spring Research Program was honestly such a refreshing experience. It didn’t feel like just another academic program—it felt like a space where curiosity was actually valued. The sessions were engaging, and the mentors made it easy to ask questions and explore new ideas without feeling overwhelmed. What I appreciated most was how supportive and down-to-earth everything felt. I didn’t just learn—I grew. If you're someone who loves learning and wants to connect with like-minded people, this program is genuinely worth it."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/samihaalam.jpg')",
      name: "Samiha Alam",
      rate: "★★★",
      profession: "Cambrian School and College",
      grade: "O Level",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "It's surprising to see such programmes in my country. This organization is creating great opportunities for the ambitious students. "
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/MalihaLinia.jpg')",
      name: "Maliha Tarannum Linia",
      rate: "★★★★",
      profession: "Ideal school and college ",
      grade: "Gap year",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "This research programme is perfect for a beginners to start their research journey. As a beginner, I discovered my strength and weaknesses of research by the impactful mentorship of this programme."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/jarinX.jpg')",
      name: "Jarin Tasnim Reboti",
      rate: "★★★★",
      profession: "Viqarunnisa Noon School and College",
      grade: "Gap year",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "It was a great experience. It helped me understand the basics of research and made the whole process feel a lot less scary."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/AyeshaAkter.jpg')",
      name: "Ayesha Akter Ria Rahman",
      rate: "★★★★★",
      profession: "Mirpur Girls Ideal College",
      grade: "Gap year",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "It has been an incredibly enriching experience. The resources were beneficial, and the team members were supportive. Thank you to the YRJ team for organizing such a transformative experience."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/FarhanaElma.jpg')",
      name: "Farhana Rahman Elma",
      rate: "★★★★★",
      profession: "Mangrove School",
      grade: "Gap year",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "Unlike many academic journals in Bangladesh that expect polished, complex work, YRJ welcomes fresh perspectives, even if you're just getting started, like me! Whether you are into Tech, literature or health, YRJ got your back. And not to mention, It's perfect for Bangladeshi students who are eager to explore but may not have access to research mentors or formal training."
  },
  
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/AhmadAbdullah.png')",
      name: "Ahmad Abdullah",
      rate: "★★★",
      profession: "Glenrich International School Uttara",
      grade: "Class 9",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "This was an extremely great program to get started with research."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/NAWALR.jpg')",
      name: "Nawal Rabbani",
      rate: "★★★",
      profession: "Glenrich International School Uttara",
      grade: "Class 9",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "The overall program was entertaining and engaging."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/AreeshaA.jpg')",
      name: "Areesha Ahmed Raaina ",
      rate: "★★★",
      profession: "Glenrich International School Uttara",
      grade: "Class 9",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "This program is beneficial for developing advanced research skills and gaining a deeper understanding of the key elements that define high-quality academic work."
  },
  {
      photo:
        "url('https://yrjournal.org/testimonialimg/Karimak.jpg')",
      name: "Karima Akter",
      rate: "★★★★★",
      profession: "Naogaon Government College",
      grade: "Class 11",
      programs: "Spring Research Program 2025",
      country: "Bangladesh",
      description:
        "This program was really helpful in guiding us through the research paper writing process."
  },

	{
		photo:
			"url('https://yrjournal.org/awardimg/wrp24/shafi.jpg')",
		name: "Shafi Bin Sultan",
		rate: "★★★★★",
		profession: "St.Joseph Higher Secondary School & College ",
		description:
			"The YRJ Winter Research Program is an exceptionally well-organized and impactful event. From the seamless registration process to the carefully curated sessions, every aspect reflects meticulous planning and attention to detail. The program's structure fosters collaboration and learning, offering participants a platform to engage deeply with their chosen research fields. The organizers' dedication to creating an intellectually stimulating environment is evident in the expert mentorship, timely communication, and diverse research opportunities provided. The event's emphasis on real-world applicability ensures that participants leave with theoretical knowledge and practical insights that contribute to their academic and professional growth."
	},
	{
		photo:
			"url('https://yrjournal.org/awardimg/wrp24/radhwa.jpeg')",
		name: "Radhwa Nouf",
		rate: "★★★★★",
		profession: "Privates",
		description:
			"This program is a prestigious initiative aimed at fostering research expertise among students. Over the course of around 40 days, participants engage in hands-on research, guided by leading experts in the field."
	},
	{
		photo:
			"url('https://yrjournal.org/awardimg/wrp24/syeda.jpg')",
		name: "Syeda Shayori Jamil",
		rate: "★★★★★",
		profession: "Academia",
		description:
			"The program starts from the very bottom and seemingly climb the top which doesn't feel very rush. This allows beginner researchers to learn basics of research effectively. My experience has been very fruitful in YRJ."
	},
	{
		photo:
			"url('https://yrjournal.org/awardimg/wrp24/nabiha.jpeg')",
		name: "Safwan Nabiha",
		rate: "★★★★★",
		profession: "Maple Leaf International School ",
		description:
			"The program was outstanding, offering excellent mentorship. The classes were highly informative and immensely helpful. It is an ideal platform for anyone aspiring to learn more about research."
	},

	{
		photo:
			"url('https://yrjournal.org/awardimg/wrp24/reeda.jpeg')",
		name: "Reeda Amanee",
		rate: "★★★★",
		profession: "Viqarunnisa Noon School & College",
		description:
			"I think everyone did an amazing job. The effort from all involved really stood out, and it made the program a success. Everyone was approachable and willing to help whenever needed, which made things run smoothly. I’d say the only thing to keep in mind for next time is maybe having a little more time for preparations, but overall, it was a great experience, and I’m grateful to be part of it!"
	},
	{
		photo:
			"url('https://yrjournal.org/awardimg/wrp24/sabik.jpg')",
		name: "Sabik Bin Sultan",
		rate: "★★★★★",
		profession: "South Point School & College",
		description:
			"An incredible experience with the winter research program organized by YRJ-Youth Research Journal! The classes are informative, and the mentors are knowledgeable and approachable. If you're looking for a program that offers great learning opportunities and helps you grow as a researcher, I highly recommend it. Huge thanks to the YRJ team for such an amazing experience!"
	},
	{
		photo:
			"url('https://yrjournal.org/awardimg/wrp24/nosrat.jpg')",
		name: "Nosrat Jahan",
		rate: "★★★★★",
		profession: "Anandaniketan School",
		description:
			"It was great, the material provided was really helpful. Well organized and always good to learn something that isn't commonly taught."
	},
	{
		photo:
			"url('https://yrjournal.org/awardimg/wrp24/sahla.jpg')",
		name: "Sahla Alam",
		rate: "★★★★",
		profession: "Maple Leaf International School",
		description:
			"This research program has been extremely educational and has helped us acquire new skills. The mentor is extremely patient and answers all of our questions with the utmost competence, making sure we are well informed about every step of the process. "
	},
	{
		photo:
			"url('https://yrjournal.org/testimonialimg/naira.PNG')",
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
		rate: "★★★★",
		profession: "Dinajpur Laboratory school and college",
		description:
			"The program overall was excellent. I believe that this is a great opportunity for the young generation to gain access to different fields of research."
	},

	{
		photo:
			"url('https://yrjournal.org/testimonialimg/hamzha.jpg')",
		name: "Aosaf Mohammad Hamzha ",
		rate: "★★★★",
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
		rate: "★★★★",
		profession: "Dhaka City College",
		description:
			"This research program helped me a lot to understand the fundamental of research and organizing in a effective way. It encouraged me to dive into the sea of knowledge. It helped me to find some particular problem's solving method very easy way."
	},

	{
		photo:
			"url('https://yrjournal.org/testimonialimg/snaziba.jpg')",
		name: "Naziba Sayem",
		rate: "★★★★",
		profession: "Mastermind English Medium School ",
		description:
			"It was a good program with amazing mentorship. What I appreciated most was Shanto bhaiya's willingness to talk to groups one-on-one so that specific problems can be discussed."
	},
	{
		photo:
			"url('https://yrjournal.org/testimonialimg/anitas.jpg')",
		name: "Anita Sheikh",
		rate: "★★★★",
		profession: "Private Student",
		description:
			"Well it was a really great experience. Most important thing is i got to learn something new and really useful."
	},
	{
		photo:
			"url('https://yrjournal.org/testimonialimg/adira.jpg')",
		name: "Adira Safwan",
		rate: "★★★★",
		profession: "Sunbeams",
		description:"I barely knew much about research before applying. YRJ allowed me to learn details and the inner workings of how one can succesfully conduct that research. It was an amazing experience! Sanaul bhaiya was very helpful and informative and overall a great mentor."
	},
	{
		photo:
			"url('https://yrjournal.org/testimonialimg/rayyan.JPG')",
		name: "Farhan Akil Rayyan",
		rate: "★★★★★",
		profession: "Academia",
		description:"Overall it's been amazing, learnt a lot of new stuff."
	},
	{
		photo:
			"url('https://yrjournal.org/testimonialimg/rrahee.jpg')",
		name: "Rahiqul Makhtum Rahee",
		rate: "★★★★",
		profession: "Rajuk Uttara Model College",
		description:"It was a nice program . Although due to the harsh situation of the country I was not able to join in a few classes , hopefully I'd get help from brother in future."
	},
	{
		photo:
			"url('https://yrjournal.org/testimonialimg/aurchi.jpg')",
		name: "Nabila Hasan",
		rate: "★★★★★",
		profession: "Rajuk Uttara Model College ",
		description:"This program helped me a lot. I have had a lot of problems regarding research. Joining this program,I realized that I knew nothing. But I have learned alot which would help me with my future profession."
	},
	{
		photo:
			"url('https://yrjournal.org/testimonialimg/fissz.jpg')",
		name: "Sadman Rahman Fiham",
		rate: "★★★★★",
		profession: "Private Candidate",
		description:"It has been a great experience learning about researching. It allowed me to efficiently outsource my material and tailor information precisely to my criteria which I was not able to. It taught me numerous tools about research. All of these will allow me to participate in writing research paper in the future with great hope of achieving a good scholarship via what I have learned."
	},
	{
		photo:
			"url('https://yrjournal.org/testimonialimg/kazad.jpg')",
		name: "Kasfia Azad Orpa",
		rate: "★★★★",
		profession: "Holy Cross College",
		description:"Overall the program was helpful. And our mentor was so friendly and always tried to give his best. He used to ask everytime if any of us dealing any problems with our research. He helped us in selecting our research proposal as well as to complete the whole research paper."
	},
	{
		photo:
			"url('https://yrjournal.org/testimonialimg/raphia.jpeg')",
		name: "Raphia Naushin Hassan",
		rate: "★★★★★",
		profession: "HEED International School",
		description:"Before applying to the YRJ program, I thoroughly researched its offerings, which only fueled my excitement about joining. However, since applying and gaining further insights, I’ve been even more impressed by what YRJ truly has to offer."
	},
	{
		photo:
			"url('https://yrjournal.org/testimonialimg/suha.jpg')",
		name: "Suha Ahsan",
		rate: "★★★★",
		profession: "Mastermind",
		description:"Very productive and loved to be presented with the opportunity!"
	},
	{
		photo:
			"url('https://yrjournal.org/testimonialimg/zarif.jpg')",
		name: "Muztaba Hossain Zarif",
		rate: "★★★",
		profession: "International Hope School Bangladesh",
		description:"The instructor obviously knows a lot about research and tons of respect for him. But it was very hard to absorb the lessons from him due to the disturbance of other students, but the resources he has compiled and made from scratch are world class and it is enough for any new researcher to finish their first project , so a heartfelt thanks to sanaul bhaiya for the continued resources support."
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
	let descriptionHeight = description.style.height = "100%";
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
	if (currentPerson === 44) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 44;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardRight);
rightArrow.addEventListener("click", setNextCardLeft);

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
