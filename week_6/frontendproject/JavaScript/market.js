//----Create HTML Elements----//

//--Header/Navigation Div--//

const headerDiv = document.createElement("div");
headerDiv.id = "headerDiv-1";
document.body.appendChild(headerDiv);
const appTitle = document.createElement("h1");
appTitle.id = "appTitle-1";
appTitle.innerText = "Artisan";
headerDiv.append(appTitle);

//--Container Div--//

const containerDiv = document.createElement("div");
containerDiv.id = "containerDiv-1";
document.body.appendChild(containerDiv);
const containerDiv2 = document.createElement("div");
containerDiv2.id = "containerDiv-2";
document.body.appendChild(containerDiv2);
const containerDiv3 = document.createElement("div");
containerDiv3.id = "containerDiv-3";
document.body.appendChild(containerDiv3);
const containerDiv4 = document.createElement("div");
containerDiv4.id = "containerDiv-4";
document.body.appendChild(containerDiv4);

//--Navigation Links--//

const anchorHome = document.createElement("a");
anchorHome.setAttribute("href", "index.html");
anchorHome.innerText = "Home";
anchorHome.id = "anchorHome";
headerDiv.append(anchorHome);
const anchorCreators = document.createElement("a");
anchorCreators.setAttribute("href", "artisans.html");
anchorCreators.innerText = "Artisans";
anchorCreators.id = "anchorCreators";
headerDiv.append(anchorCreators);
const anchorProducts = document.createElement("a");
anchorProducts.setAttribute("href", "market.html");
anchorProducts.innerText = "Market";
anchorProducts.id = "anchorProducts";
headerDiv.append(anchorProducts);
const anchorCompanies = document.createElement("a");
anchorCompanies.setAttribute("href", "exhibitors.html");
anchorCompanies.innerText = "Exhibitors";
anchorCompanies.id = "anchorCompanies";
headerDiv.append(anchorCompanies);

//--Event Listeners--//

document.addEventListener("DOMContentLoaded", () => {
	getProducts();
});

//--Get Product(s) Function--//

const getProducts = async () => {
	const getProductData = await fetch(
		"https://fakestoreapi.com/products?limit=5"
	);
	const getProductDataJson = await getProductData.json();
	console.log(getProductDataJson);
	//-Create Product Card-//
	let counter = 0;
	for (let product of getProductDataJson) {
		//-Div-//

		const productDiv = document.createElement("div");
		productDiv.className = "productDiv";
		productDiv.setAttribute("id", `counter-${counter}`);
		containerDiv.append(productDiv);

		//-Element InnerText-//

		let productTitle = getProductDataJson[counter].title;
		let productIMG = getProductDataJson[counter].image;
		let productDescript = getProductDataJson[counter].description;
		let productPrice = getProductDataJson[counter].price;

		//-Product Name Header-//

		const productName = document.createElement("h5");
		productName.className = "productName";
		productName.innerText = `${productTitle}`;
		productDiv.append(productName);

		//-Product Card List-//

		const productCardList = document.createElement("ul");
		productCardList.className = "productCardList";
		productDiv.append(productCardList);
		const productIMGItem = document.createElement("img");
		productIMGItem.className = "productIMGItem";
		productIMGItem.width = "100";
		productIMGItem.height = "100";
		productIMGItem.src = `${productIMG}`;
		productDiv.append(productIMGItem);
		// const productDescriptItem = document.createElement("li");
		// productDescriptItem.className = "productDescriptItem";
		// productDescriptItem.innerText = `${productDescript}`;
		// productDiv.append(productDescriptItem);
		const productPriceItem = document.createElement("li");
		productPriceItem.className = "productPriceItem";
		productPriceItem.innerText = `$${productPrice}`;
		productDiv.append(productPriceItem);
		counter += 1;
	}
};
