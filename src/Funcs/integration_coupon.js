import coupon from "coupon";
import randomstring from "randomstring";

export async function generate_coupon(mail, value) {
	const str = randomstring.generate(8);
	let desc = 0;

	if (value > 0 && value <= 15) {
		desc = 5;
	} else if (value > 15 && value <= 50) {
		desc = 10;
	} else if (value > 50 && value <= 110) {
		desc = 15;
	} else if (value > 110 && value <= 210) {
		desc = 20;
	} else {
		desc = 25;
	}

	const mycp = coupon(str).give(`${desc}%`).limit(1).person(mail);
	return mycp.json();
}