import { system } from '/core/system.js'
import { boot, sleep } from '/boot.js'

load.setup(1, 0, 1, 1)

export const je = new Naghoom("dashboard")

boot()

// load.side_bar_id .. fast access
export const _side_bar_id_ = load.side_bar_id

import { Ident } from "/core/ident.js"

if(! Ident.is_append()) location.replace("/")



import { app, _reset_side_bar_, fast_control } from '/dashboard/app.js'

// Build and desgin
_reset_side_bar_ ()

app.head()

app.welcome()

app.balance.view()

app.logs.view()


// for (var i=0; i< 10; i++)
	// app.logs.append({id: i+1, type: "withdraw", status: true, date: "15:04 03.03.2026"})




const sys = new system()

fast_control.loading(true)

await sleep(200)
app.balance.change(sys.get_balance())

await sleep(1400)
sys.get_logs().forEach(e => app.logs.append(e))

fast_control.loading(false)







