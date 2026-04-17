const matm_ident = {
	is_append: function() {
		return localStorage.matm_username && localStorage.matm_accountn ? true : false
	},

	append_ident: function(username = "Ident", account_number = 9494946) {
		// Some regulares


		localStorage.matm_username = username
		localStorage.matm_accountn = account_number
	},



	get_ident: function() {
		if(!this.is_append()) return false

		return [localStorage.matm_username, localStorage.matm_accountn]
	},

	reset: function() {
		localStorage.matm_username = ""
		localStorage.matm_accountn = ""
	}
}

export const Ident = matm_ident