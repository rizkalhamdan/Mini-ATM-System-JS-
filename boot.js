export const boot = function() {
	window.addEventListener("keyup", function(e) {
		if (e.ctrlKey && (e.key == 'v' || e.key == 'V')) {
			e.preventDefault() // No browser custom shortkut

			load.colors(localStorage.colors == '1' ? 0 : 1)
		}
	})

	return true
}