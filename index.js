import { boot } from "/boot.js"

load.setup(1, 0, 1, 0)

const je = new Naghoom("Mini ATM System")

boot()

const main = je.na({
	name: "section",
	classes: "malo",
	'max-width': "50rem"
})




main.na({
	name: "button",
	classes: "rc nag btn lineout ma",
	content: je.get_icon_rounded("school") + "Jazeera Private Uniersity",
})

main.na({
	name: "h1",
	classes: "rc big",
	content: "<br> Mini ATM <br> <h1 class='col'>System</h1>",
})

main.na({
	name: "p",
	content: "Editorial precision in finical lore bgh bbjnub hbyjhbkyug bhjvjh bhhby vbhbyh v jnjihciwnc bduibiubpdi ybpbi ybc h b puib b bby biwui non nubnj bnjkn uinjnui bjnjk njnoo bujb"
})

main.na({ content: "<br>"})

main.na({
	name: "button",
	classes: "rc btn",
	padding: ".6rem 2rem",
	content: je.get_icon_rounded("encrypted") + "Biometric Ready",
	'margin-right': ".8rem"
})

main.na({
	name: "button",
	classes: "rc btn",
	padding: ".6rem 2rem",
	content: je.get_icon_rounded("power") + "Instant Credits"
})









const seco = je.na({
	name: "section",
	classes: "login",
	'max-width': "40rem"
})

const login = seco.na({
	classes: "logcard rc som",
	height: "35rem",
	background: "var(--second-col)",
	'border-radius': "4rem",
	'corner-shape': "squircle",
	padding: "2rem",
	position: "relative"
})

login.na({
	name: "h2",
	content: "Welcome back"
})

login.na({
	name: "p",
	content: "<br> Enter your credentiais to access you terminal. <br> <br>",
})


const username = login.na({
	name: "input",
	classes: "rc inp ii",
	hint: "Username"
})

const account_number = login.na({
	name: "input",
	classes: "rc inp ii",
	hint: "Account number"
})

account_number.atr({ type: "number"})



login.na({
	name: "button",
	classes: "rc btn main width center",
	content: "Access to terminal" + je.get_icon_rounded("arrow_right_alt"),
	position: "absolute",
	top: "100%",
	left: "50%",
	transform: "translate(-50%, -140%)",
	width: "80%",
	padding: "1rem",
	preload: 1000
})





let deti = seco.na({
	'margin-top': "2rem",
	classes: "rc flex",
})

let ver = {
	name: "button",
	classes: "rc btn",
}

deti.na({
	...ver,
	content: je.get_icon_rounded("contrast"),
	click: load.view_themes
}).atr({ title: "ctrl + k to fast change theme"})

deti.na({
	...ver,
	content: je.get_icon_rounded("language")
})

deti.na({
	...ver,
	content: je.get_icon_rounded("key")
})

deti.na({
	...ver,
	content: je.get_icon_rounded("key")
})




