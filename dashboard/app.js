import { je, _side_bar_id_ } from '/dashboard/index.js'
import { sleep } from '/boot.js'
import { Ident } from '/core/ident.js'

export const _reset_side_bar_ = async function() {
	var sidebar = document.getElementById(_side_bar_id_)

	while (sidebar.firstChild) {
		sidebar.removeChild(sidebar.firstChild)
	}



	var new_content = document.createElement("div")
	new_content.innerHTML = `
		<div class='rc box flex' style='justify-content: flex-start; gap: 3rem'>
			<img src='/res/google.jpeg' class='rc ic'>
			<b>Mini ATM System</b>
		</div>

		<br> <br>
		<div class='rc go som act loc_card'>
			<h2 class='col'>${Ident.get_ident()[0]}</h2>
			<h2>${Ident.get_ident()[1]}</h2> 
			<br> <br> <br>
			
			<button class='rc btn lineout mal center' onclick='location.replace("/")'>${je.get_icon_rounded('switch_account')}Account</button>
		</div>
	`
	sidebar.appendChild(new_content)

	await sleep(2000)
	if(!Ident.is_append()) return "stop"
	

	document.getElementsByClassName("loc_card")[0].classList.remove("act")
}