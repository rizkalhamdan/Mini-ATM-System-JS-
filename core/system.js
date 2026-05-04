import { Ident } from "/core/ident.js";

class System {
	
	constructor() {
		
		if(Ident.is_append()) {
			if(this.is_exist() ) { }

			else this.reset()
		} else {
			// await sleep(800)
			location.replace("/")
		}
		
	}

	is_exist() {
		return localStorage.miniatmbalance && localStorage.miniatmlogs
	}

	reset() {
		var initial_balance = "0",
			initial_data = [{type: "New account", date: new Date().toDateString(), status: true, id: 0}]
		
		localStorage.miniatmbalance = initial_balance
		localStorage.miniatmlogs = JSON.stringify(initial_data)

		return true
	}

	append(q = {type: "Unknown input", id: 0, date: new Date().toDateString(), status: false}) {
		var ol = JSON.parse(localStorage.miniatmlogs)
		ol.push(q)

		localStorage.miniatmlogs = JSON.stringify(od)

		return true
	}

	get_logs() {
		if(! this.is_exist()) return []
		return JSON.parse(localStorage.miniatmlogs)
	}

	get_balance() {
		if(! this.is_exist()) return 0
		else return +localStorage.miniatmbalance
	}

	get_balance_full() {
		if(! this.is_exist()) return 0
		return this.get_balance() + " " + Ident.get_currency()
	}
}

export class system extends System {}