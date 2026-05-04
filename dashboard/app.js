import { je, _side_bar_id_ } from '/dashboard/index.js'
import { sleep } from '/boot.js'
import { Ident } from '/core/ident.js'

export const fast_control = {
	loading: async function(status = true) {
		var ddlloj = document.getElementsByClassName("loading_control")[0] 
		if (status) ddlloj.classList.add("osloading")
		else ddlloj.classList.remove("osloading")
	}
}

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
			
			<button class='rc btn lineout mal center' onclick='location.replace("/")'>${je.get_icon_rounded('switch_account')}Account</button>
		</div>
		<div class='rc loading_control'><div class='one'></div><div class='two'></div></div> 
	`
	sidebar.appendChild(new_content)

	await sleep(2000)
	if(!Ident.is_append()) return "stop"
	

	document.getElementsByClassName("loc_card")[0].classList.remove("act")
}

export const app = {
	side_version: "1.1",
	
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
			content: "All your data is safe.",
			'font-size': "1.2rem"
		})
	},

	balance: {
		bl: document.createElement("h1"),
		depsoit: function() {
			load.CLC.toast("Depsoit")
		},
		
		withdraw: function() {
			load.CLC.toast("clear it")
		},

		view: function() {
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
				content: "$ 94,999,999.94",
				margin: "2rem 0"
			})

			this.bl = current_balance.nag

			bala.na({ classes: "fix"})

			bala.na({
				name: "button",
				classes: "rc btn main",
				content: je.get_icon_rounded("arrow_cool_down") + "Depsoit funds",
				'margin-right': "1rem",
				click: app.balance.depsoit
			})

			bala.na({
				name: "button",
				classes: "rc btn",
				content: je.get_icon_rounded("arrow_warm_up") + "Withdraw",
				click: app.balance.withdraw
			})


			var sug = wide.na({
				classes: "rc go",
				display: "none"
			})
		},

		change: function(value = this.bl.innerHTML) {
			value = value.toFixed(2)

			this.bl.innerHTML = `${Ident.get_currency()} ${value}`

			load.CLC.write(this.bl)
		}
	},

	logs: {
		lg: document.createElement("div"),

		view: function(data = []) {
			this.lg = je.na({
			classes: "rc box",
			'max-height': "30vh",
			})

			data.forEach(e => this.append(e))
		},
		
		append: function(q = {}) {
			var one = this.lg.na({ classes: "rc flex"})

			one.na({
				name: "span",
				content: q.id || "0",
				preload: 100
			})

			one.na({
				name: "span",
				content: q.type || "Unknown option",
				preload: 200
			})

			one.na({
				name: "b",
				content: q.date || "01:43 30.04.2026",
				preload: 300
			})

			one.na({
				name: "b",
				classes: "col nus rc",
				content: q.status || false ? "<span class='rc green'> success </span>" : "<span class='rc red'> fail </span>",
				preload: 400
			})


		}
	},

	pop: {
		preload: function() {
			var father = document.createElement("section")
			father.classList.add("rc", "full", "align", "itsforremo")
			father.innerHTML = `<button class='rc btn' style='position: absolute; right: 2rem; top: 2rem' onclick='load.remo(document.getElementsByClassName("itsforremo")[0])'>${je.get_icon_rounded('arrow_back_ios_new')}</button>`

			// document.body.appendChild(this.father)
			return father 
		},

		dep: function(cur_bal = "Could not fetch it now!") {
			var contain = this.preload()

			var itsokey = ['jssi' + Math.floor(Math.random() * 10e3), 'jssb' + Math.floor(Math.random() * 10e3)]

			contain.innerHTML += `
				<div class='rc box'>
					<h2 class='rc big col'>Depsoit</h2>
					<h3>Current balance:  (${cur_bal})</h3>
					<br>
					<input placeholder='Insert the amount' class='rc inp ${itsokey[0]}' type='number'/>
					<button class='rc btn main center ${itsokey[1]}'>${je.get_icon_rounded("paid")} Paid</button>
				</div>
			`

			document.body.appendChild(contain)
			return itsokey // Classes name
		},

		withdraw: function() {
			
		}
	}

}


