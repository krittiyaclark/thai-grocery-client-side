document.querySelector('button').addEventListener('click', getthaiGroceryBrand)

async function getthaiGroceryBrand() {
	const groceryBrand = document.querySelector('input').value
	try {
		const res = await fetch(
			`https://thai-grocery-api.herokuapp.com/api/thai-grocery-product/${groceryBrand}`
		)
		const data = await res.json()

		console.log(data)
		document.querySelector('h2').innerText = data.brand
	} catch (err) {
		console.log(err)
	}
}
