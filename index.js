import { boot, constants } from "/boot.js"

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
	content: "Manage your account easily. Securely deposit, withdraw, and track your investment growth in one place."
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

export const login = seco.na({
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
	content: "Welcome back!"
})

login.na({
	name: "p",
	content: "<br> Please Enter your name and account number to access your dashboard (terminal). <br> <br>",
})


export const username = login.na({
	name: "input",
	classes: "rc inp ii",
	hint: "Username"
})

export const account_number = login.na({
	name: "input",
	classes: "rc inp ii",
	hint: "Account number"
})

account_number.atr({ type: "number"})



export const access_nag = login.na({
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
	content: je.get_icon_rounded("language"),
	click: function() {
		load.CLC.toast("This project is till under-developing.", "warning")
	}
})

deti.na({
	...ver,
	content: je.get_icon_rounded("key"),
	click: function() {
		// Its okey
	}
})

deti.na({
	...ver,
	content: je.get_icon_rounded("support_agent"),
	click: function() {
		location.assign("support/")
	}
})

import { load_now } from "/app.js"


if(!constants.is_android)	setTimeout(load_now, 200)



