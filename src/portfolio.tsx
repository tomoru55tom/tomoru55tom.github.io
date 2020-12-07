import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Kiyoung Eom',
	title: 'Hello, I\'m Kiyoung Eom',
	subTitle: emoji("Over 10+ years experienced ❤"),
	role: "Software Developer",
	resumeLink: "Your resume link... google drive or something else",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: '',
	linkedin: '',
	email: 'tomoru5@naver.com',
	facebook: '',
	twitter: "",
	instagram: "",
	medium: '',
	stackoverflow: ''
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "Skills",
	describeSkills: [
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		// {fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80},
		// {fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
		// {fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		// {fontAwesome: "fab fa-sass", text: "Sass", proficiency: 30},
		// {fontAwesome: "fab fa-react", text: "React", proficiency: 60},
		// {fontAwesome: "fab fa-aws", text: "AWS", proficiency: 20},
		{fontAwesome: "", text: ".Net", proficiency: 80},
		{fontAwesome: "", text: "SQL DB", proficiency: 70},
		{fontAwesome: "", text: "JS", proficiency: 40},
		{fontAwesome: "", text: "AWS", proficiency: 30},
		{fontAwesome: "", text: "Azure", proficiency: 40},
	],
	view: true
};

export const experience = {
	title: emoji("Work Experience ⌛"),
	lists: [
		{
			date: "2020.09 ~ 2020.12",
			company: "Endalgo",
			role: "Back-End, .NET Core, MS-SQL, EFCore, Azure",
		},
		{
			date: "2019.08 ~ 2020.09",
			company: "Trenbe",
			role: "Crawling Bot",
		},
		{
			date: "2019.03 ~ 2019.08",
			company: "eSellers",
			role: "Crawling Bot",
		},
		{
			date: "2018.09 ~ 2019.01",
			company: "Geminis",
			role: "Back-End",
		},
		{
			date: "2016.09 ~ 2018.06",
			company: "KPNP",
			role: "Windows Application",
		},
		{
			date: "2013.10 ~ 2016.07",
			company: "TFSolution",
			role: "Windows Application",
		},
		{
			date: "2010.12 ~ 2013.09",
			company: "AwooSystem",
			role: "Windows Application",
		},
		{
			date: "2010.05 ~ 2010.12",
			company: "Xray21",
			role: "Windows Application",
		},
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: false
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "Recent projects",
	lists: [
		{
			title: "Endalgo",
			desc: "Soccer community platform. Developed APIs and Admin site",
			url: "https://www.endalgo.com"
		},
		{
			title: "Trenbe",
			desc: "Purchasing agent service. Developed crawling bots to find luxury goods around the world",
			url: "https://mag.trenbe.com/trenbot"
		},
		{
			title: "KPNP",
			desc: "Intergreted sports results system. Developed entire results system.",
			url: "https://kpnp.net/21"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: false
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: false
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "Feel free to contact me.",
	introduce: emoji("tomoru5@naver.com❤"),
	view: true
}