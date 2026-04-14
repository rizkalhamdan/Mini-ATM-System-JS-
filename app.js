import { username, account_number, access_nag, login } from "/index.js"

const sleep = function(ms) {
	return new Promise(res => setTimeout(res, ms))
}


export const load_now = async function() {
	login.nag.classList.add("act")
	
	await sleep(2000)
	
	login.nag.classList.remove("act")
}
