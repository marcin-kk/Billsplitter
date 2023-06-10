const amoutInput = document.querySelector("#amount")
const peopleNumberInput = document.querySelector("#people")
const selectTip = document.querySelector("#tip")
const calcBtn = document.querySelector(".calculate")
const billInfo = document.querySelector(".bill-info")
const warning = document.querySelector(".warning")
let billPerPerson

const calcBillPerPerson = () => {
	const amount = parseInt(amoutInput.value)
	const peopleNumber = parseInt(peopleNumberInput.value)
	const tipPercent = selectTip.value
	const tipAmount = amount * tipPercent
	billPerPerson = Math.round((amount + tipAmount) / peopleNumber)
	return billPerPerson
}

const calcBill = () => {
	if (amoutInput.value && peopleNumberInput.value) {
		calcBillPerPerson()
		billInfo.textContent = `Each person should pay: `
		const span = document.createElement("span")
		span.textContent = billPerPerson
		billInfo.append(span, " zł")
		amoutInput.classList.remove("red-border")
		peopleNumberInput.classList.remove("red-border")
		warning.style.display = "none"
		billInfo.style.display = "block"
	} else {
		warning.style.display = "block"
		warning.textContent = "Please complete both fields in red."
		amoutInput.classList.add("red-border")
		peopleNumberInput.classList.add("red-border")
		billInfo.style.display = "none"
	}
}

calcBtn.addEventListener("click", calcBill)
