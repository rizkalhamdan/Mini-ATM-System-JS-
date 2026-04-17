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
	})

	return new Promise(res => {
		
	})
}