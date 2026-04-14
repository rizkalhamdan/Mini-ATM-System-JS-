export const boot = function() {
	window.addEventListener("keyup", function(e) {
		if (e.ctrlKey && (e.key == 'k' || e.key == 'K')) {
			e.preventDefault() // No browser custom shortkut

			load.colors(localStorage.colors == '1' ? 0 : 1)
		}
	})

	return true
}

export const constants = {
	is_android: false,
}


// Identity
export const _check_data_ = function(user_name, account_number) {
	return user_name === "rizkhamdan" && account_number === "949494"
}