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

export const app = {
	side_version: "1.0",
	
	head: function() {
		var hd = je.na({
			name: "section",
			classes: "head center",
		})

		hd.na({
			name: "h2",
			classes: "col",
			content: "dashboard"
		})

		// fix it now
		// je.na({ classes: "fix"})
	},

	welcome: function() {
		var wel = je.na({ 'margin-top': "2rem", preload: 500})
		
		var wri = wel.na({
			name: "h1",
			content: "Welcome back, " + Ident.get_ident()[0].split(" ")[0],
		})

		load.CLC.write(wri.nag)


		wel.na({
			name: "p",
			content: "Your data is ready now",
			'font-size': "1.2rem"
		})
	},

	balance: function() {
		var wide = je.na({
			name: "section",
			classes: "rc flex",
			'margin-top': "2rem"
		})

		var bala = wide.na({
			classes: "rc go",
			width: "100%",
			'text-align': "left"
		})

		bala.na({
			name: "b",
			classes: "col",
			content: "Current balance"
		})

		var current_balance = bala.na({
			name: "h1",
			'font-size': "2.8rem",
			content: "$ 23,56462.99",
			margin: "2rem 0"
		})

		bala.na({ classes: "fix"})

		bala.na({
			name: "button",
			classes: "rc btn main",
			content: "Main",
			margin: "1rem"
		})

		bala.na({
			name: "button",
			classes: "rc btn",
			content: "out now"
		})


		var sug = wide.na({
			classes: "rc go",
			display: "none"
		})
	}

}


