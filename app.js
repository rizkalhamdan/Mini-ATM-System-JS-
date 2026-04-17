import { username, account_number, access_nag, login, je } from "/index.js"
import { Ident } from "/core/ident.js"


const _check_req_able_ = function() {
	return (
		username.nag.value.length > 4 &&
		username.nag.value.length < 14 &&
		
		account_number.nag.value.length === 7)
}

const sleep = function(ms) {
	return new Promise(res => setTimeout(res, ms))
}


export const load_now = async function() {
	login.nag.classList.add("act")

	access_nag.nag.addEventListener("click", req)

	await sleep(1000)

	load.CLC.toast(Ident.is_append())
	if(Ident.is_append()) await _is_exist_()
	
	await sleep(2000)

	
	login.nag.classList.remove("act")	
}


const req = function() {
	// white senario
	if(_check_req_able_()) {
		login.nag.classList.add("act")

		Ident.append_ident(username.nag.value, account_number.nag.value)

		setTimeout(_=> {
			login.nag.classList.remove("act")
			setTimeout(_=> location.replace("dashboard/"))
		}, 1000)

	} else load.CLC.toast("Please insert true login data.", "error")
}




const _is_exist_ = function() {
	var kbrna_omer = je.na({
		name: "section",
		classes: "rc full",
		preload: 200
	})

	kbrna_omer.na({
		name: "b",
		classes: "rc big col",
		content: "There is exist ident!"
	})

	kbrna_omer.na({
		classes: "rc box",
		content: `
			username: ${Ident.get_ident()[0]} <br>
			account number: ${Ident.get_ident()[1]}
		`
	})

	.na({
		name: "button",
		classes: "rc btn main width center",
		content: je.get_icon_rounded("login") + "Continue with the exist",
		'margin-top': "4rem",
		click: function() {
			location.replace("/dashboard/")
		}
	})

	var cnid = kbrna_omer.na({
		name: "button",
		classes: "rc btn center",
		content: je.get_icon_rounded("delete") + "Remove exist ident and create new"
	})

	return new Promise(res => {
		cnid.nag.addEventListener("click", async function(){

			cnid.nag.innerHTML = je.get_icon_rounded("restart_alt") + "resetting ..."
			Ident.reset()

			await sleep(1000)
			
			kbrna_omer.nag.style.display = "none"
			res(true)
		}, {once: true})
	})
}