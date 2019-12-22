document.addEventListener("DOMContentLoaded", init);

function init() {
	
	const screenWidth = window.innerWidth;

	if (screenWidth > 1200) {
		/* replacing pictures in <<four FURTHER London PHOTOS>> */
		const temptingTownFotoForSmall = document.querySelector("div.tempting-town--model");
		const londonPhotosGifForSmall = document.querySelector("div.gif-picture1");
		const modelAtCentralCafeForSmall = document.querySelector("div.centralcafe-picture");
		const modelInLondonForSmall = document.querySelector("div.tabledancing-picture");

		const temptingTownPhotoForDesktop = document.createElement("div");
		temptingTownPhotoForDesktop.classList.add("tempting-town--model");
		const imageModelInLondonStreetBig = document.createElement("img");
		imageModelInLondonStreetBig.setAttribute("src", "./img/D-pic2.jpg");
		imageModelInLondonStreetBig.setAttribute("alt", "Model in London street");
		temptingTownPhotoForDesktop.appendChild(imageModelInLondonStreetBig);
		temptingTownFotoForSmall.replaceWith(temptingTownPhotoForDesktop);

		const londonPhotosGifForDesktop = document.createElement("div");
		londonPhotosGifForDesktop.classList.add("gif-picture1");
		const imageModelsInLondonStreetsBig = document.createElement("img");
		imageModelsInLondonStreetsBig.setAttribute("src", "./gif-files/D-gif1.gif");
		imageModelsInLondonStreetsBig.setAttribute("alt", "Models in London streets");
		londonPhotosGifForDesktop.appendChild(imageModelsInLondonStreetsBig);
		londonPhotosGifForSmall.replaceWith(londonPhotosGifForDesktop);

		const modelInLondonForDesktop = document.createElement("div");
		modelInLondonForDesktop.classList.add("tabledancing-picture");
		const imageModelInLondonBig = document.createElement("img");
		imageModelInLondonBig.setAttribute("src", "./img/D-pic3.jpg");
		imageModelInLondonBig.setAttribute("alt", "Model in London night street");
		modelInLondonForDesktop.appendChild(imageModelInLondonBig);
		modelInLondonForSmall.replaceWith(modelInLondonForDesktop);

		const modelAtCentralCafeForDesktop = document.createElement("div");
		modelAtCentralCafeForDesktop.classList.add("centralcafe-picture");
		const imageModelAtCentralCafeBig = document.createElement("img");
		imageModelAtCentralCafeBig.setAttribute("src", "./img/D-pic4.jpg");
		imageModelAtCentralCafeBig.setAttribute("alt", "Model at Central Cafe in London");
		modelAtCentralCafeForDesktop.appendChild(imageModelAtCentralCafeBig);
		modelAtCentralCafeForSmall.replaceWith(modelAtCentralCafeForDesktop);

		/* replacing pictures in <<SHOES section>> */
		const shoePicture1ForSmall = document.querySelector("div.shoe-picture1");
		const shoePicture2ForSmall = document.querySelector("div.shoe-picture2");
		const shoePicture3ForSmall = document.querySelector("div.shoe-picture3");
		const shoePicture4ForSmall = document.querySelector("div.shoe-picture4");

		const shoePicture1ForDesktop = document.createElement("div");
		shoePicture1ForDesktop.classList.add("shoe-picture1");
		const imageShoePicture1Big = document.createElement("img");
		imageShoePicture1Big.setAttribute("src", "./produkty/D-Warstwa%201331.png");
		imageShoePicture1Big.setAttribute("alt", "czarne sneakersy");
		shoePicture1ForDesktop.appendChild(imageShoePicture1Big);
		shoePicture1ForSmall.replaceWith(shoePicture1ForDesktop);

		const shoePicture2ForDesktop = document.createElement("div");
		shoePicture2ForDesktop.classList.add("shoe-picture2");
		const imageShoePicture2Big = document.createElement("img");
		imageShoePicture2Big.setAttribute("src", "./produkty/D-Warstwa%20134.png");
		imageShoePicture2Big.setAttribute("alt", "czarne buty sportowe");
		shoePicture2ForDesktop.appendChild(imageShoePicture2Big);
		shoePicture2ForSmall.replaceWith(shoePicture2ForDesktop);

		const shoePicture3ForDesktop = document.createElement("div");
		shoePicture3ForDesktop.classList.add("shoe-picture3");
		const imageShoePicture3Big = document.createElement("img");
		imageShoePicture3Big.setAttribute("src", "./produkty/D-Warstwa%20135.png");
		imageShoePicture3Big.setAttribute("alt", "czarne botki");
		shoePicture3ForDesktop.appendChild(imageShoePicture3Big);
		shoePicture3ForSmall.replaceWith(shoePicture3ForDesktop);

		const shoePicture4ForDesktop = document.createElement("div");
		shoePicture4ForDesktop.classList.add("shoe-picture4");
		const imageShoePicture4Big = document.createElement("img");
		imageShoePicture4Big.setAttribute("src", "./produkty/D-Warstwa%201361.png");
		imageShoePicture4Big.setAttribute("alt", "białe buty sportowe");
		shoePicture4ForDesktop.appendChild(imageShoePicture4Big);
		shoePicture4ForSmall.replaceWith(shoePicture4ForDesktop);

		/* replacing pictures in <<LONDON SHINES section>> */
		const londonShinesPhotoForSmall = document.querySelector("div.london-shines-picture");
		const londonShinesGifPicForSmall = document.querySelector("div.gif-picture2");
		const mothClubPhotoForSmall = document.querySelector("div.moth-picture");

		const londonShinesPhotoForDesktop = document.createElement("div");
		londonShinesPhotoForDesktop.classList.add("london-shines-picture");
		const adihdSistersPhotoBig = document.createElement("img");
		adihdSistersPhotoBig.setAttribute("src", "./img/D-pic5.jpg");
		adihdSistersPhotoBig.setAttribute("alt", "ADiHD sisters in London night street");
		londonShinesPhotoForDesktop.appendChild(adihdSistersPhotoBig);
		londonShinesPhotoForSmall.replaceWith(londonShinesPhotoForDesktop);

		const londonShinesGifPicForDesktop = document.createElement("div");
		londonShinesGifPicForDesktop.classList.add("gif-picture2");
		const londonNightLifeGifPicBig = document.createElement("img");
		londonNightLifeGifPicBig.setAttribute("src", "./gif-files/D-gif2.gif");
		londonNightLifeGifPicBig.setAttribute("alt", "London night life");
		londonShinesGifPicForDesktop.appendChild(londonNightLifeGifPicBig);
		londonShinesGifPicForSmall.replaceWith(londonShinesGifPicForDesktop);

		const mothClubPhotoForDesktop = document.createElement("div");
		mothClubPhotoForDesktop.classList.add("moth-picture");
		const mothClubPictureBig = document.createElement("img");
		mothClubPictureBig.setAttribute("src", "./img/D-pic6.jpg");
		mothClubPictureBig.setAttribute("alt", "Moth club models");
		mothClubPhotoForDesktop.appendChild(mothClubPictureBig);
		mothClubPhotoForSmall.replaceWith(mothClubPhotoForDesktop);

		/* replacing pictures in <<CLOTHING offer>> section */
		const clothingImg1ForSmall = document.querySelector("div.clothing-img1");
		const clothingImg2ForSmall = document.querySelector("div.clothing-img2");
		const clothingImg3ForSmall = document.querySelector("div.clothing-img3");
		const clothingImg4ForSmall = document.querySelector("div.clothing-img4");

		const clothingImg1ForDesktop = document.createElement("div");
		clothingImg1ForDesktop.classList.add("clothing-img1");
		const clothingImgage1Big = document.createElement("img");
		clothingImgage1Big.setAttribute("src", "./produkty/D-Warstwa%20151.png");
		clothingImgage1Big.setAttribute("alt", "zielona kurtka");
		clothingImg1ForDesktop.appendChild(clothingImgage1Big);
		clothingImg1ForSmall.replaceWith(clothingImg1ForDesktop);

		const clothingImg2ForDesktop = document.createElement("div");
		clothingImg2ForDesktop.classList.add("clothing-img2");
		const clothingImgage2Big = document.createElement("img");
		clothingImgage2Big.setAttribute("src", "./produkty/D-Warstwa%20154.png");
		clothingImgage2Big.setAttribute("alt", "czarna sukienka");
		clothingImg2ForDesktop.appendChild(clothingImgage2Big);
		clothingImg2ForSmall.replaceWith(clothingImg2ForDesktop);

		const clothingImg3ForDesktop = document.createElement("div");
		clothingImg3ForDesktop.classList.add("clothing-img3");
		const clothingImgage3Big = document.createElement("img");
		clothingImgage3Big.setAttribute("src", "./produkty/D-Warstwa%20152.png");
		clothingImgage3Big.setAttribute("alt", "czarne legginsy");
		clothingImg3ForDesktop.appendChild(clothingImgage3Big);
		clothingImg3ForSmall.replaceWith(clothingImg3ForDesktop);

		const clothingImg4ForDesktop = document.createElement("div");
		clothingImg4ForDesktop.classList.add("clothing-img4");
		const clothingImgage4Big = document.createElement("img");
		clothingImgage4Big.setAttribute("src", "./produkty/D-Warstwa%20153.png");
		clothingImgage4Big.setAttribute("alt", "czarna sukienka");
		clothingImg4ForDesktop.appendChild(clothingImgage4Big);
		clothingImg4ForSmall.replaceWith(clothingImg4ForDesktop);
	}
	else if (screenWidth > 500) {
		/* replacing pictures in <<four FURTHER London PHOTOS>> */
		const temptingTownFotoForSmall = document.querySelector("div.tempting-town--model");
		const londonPhotosGifForSmall = document.querySelector("div.gif-picture1");
		const modelAtCentralCafeForSmall = document.querySelector("div.centralcafe-picture");
		const modelInLondonForSmall = document.querySelector("div.tabledancing-picture");

		const temptingTownPhotoForTablet = document.createElement("div");
		temptingTownPhotoForTablet.classList.add("tempting-town--model");
		const imageModelInLondonStreet = document.createElement("img");
		imageModelInLondonStreet.setAttribute("src", "./img/T-pic1_05.jpg");
		imageModelInLondonStreet.setAttribute("alt", "Model in London street");
		temptingTownPhotoForTablet.appendChild(imageModelInLondonStreet);
		temptingTownFotoForSmall.replaceWith(temptingTownPhotoForTablet);

		const londonPhotosGifForTablet = document.createElement("div");
		londonPhotosGifForTablet.classList.add("gif-picture1");
		const imageModelsInLondonStreets = document.createElement("img");
		imageModelsInLondonStreets.setAttribute("src", "./gif-files/gif2-tablet.gif");
		imageModelsInLondonStreets.setAttribute("alt", "Models in London streets");
		londonPhotosGifForTablet.appendChild(imageModelsInLondonStreets);
		londonPhotosGifForSmall.replaceWith(londonPhotosGifForTablet);

		const modelAtCentralCafeForTablet = document.createElement("div");
		modelAtCentralCafeForTablet.classList.add("centralcafe-picture");
		const imageModelAtCentralCafe = document.createElement("img");
		imageModelAtCentralCafe.setAttribute("src", "./img/T-Bez-nazwy-7_08.jpg");
		imageModelAtCentralCafe.setAttribute("alt", "Model at Central Cafe in London");
		modelAtCentralCafeForTablet.appendChild(imageModelAtCentralCafe);
		modelAtCentralCafeForSmall.replaceWith(modelAtCentralCafeForTablet);

		const modelInLondonForTablet = document.createElement("div");
		modelInLondonForTablet.classList.add("tabledancing-picture");
		const imageModelInLondon = document.createElement("img");
		imageModelInLondon.setAttribute("src", "./img/T-pic3.png");
		imageModelInLondon.setAttribute("alt", "Model at Central Cafe in London");
		modelInLondonForTablet.appendChild(imageModelInLondon);
		modelInLondonForSmall.replaceWith(modelInLondonForTablet);

		/* replacing pictures in <<SHOES section>> */
		const shoePicture1ForSmall = document.querySelector("div.shoe-picture1");
		const shoePicture2ForSmall = document.querySelector("div.shoe-picture2");
		const shoePicture3ForSmall = document.querySelector("div.shoe-picture3");
		const shoePicture4ForSmall = document.querySelector("div.shoe-picture4");

		const shoePicture1ForTablet = document.createElement("div");
		shoePicture1ForTablet.classList.add("shoe-picture1");
		const imageShoePicture1 = document.createElement("img");
		imageShoePicture1.setAttribute("src", "./produkty/T-Warstwa%20133%20kopia%202.png");
		imageShoePicture1.setAttribute("alt", "czarne sneakersy");
		shoePicture1ForTablet.appendChild(imageShoePicture1);
		shoePicture1ForSmall.replaceWith(shoePicture1ForTablet);

		const shoePicture2ForTablet = document.createElement("div");
		shoePicture2ForTablet.classList.add("shoe-picture2");
		const imageShoePicture2 = document.createElement("img");
		imageShoePicture2.setAttribute("src", "./produkty/T-Warstwa%20134%20kopia%202.png");
		imageShoePicture2.setAttribute("alt", "czarne buty sportowe");
		shoePicture2ForTablet.appendChild(imageShoePicture2);
		shoePicture2ForSmall.replaceWith(shoePicture2ForTablet);

		const shoePicture3ForTablet = document.createElement("div");
		shoePicture3ForTablet.classList.add("shoe-picture3");
		const imageShoePicture3 = document.createElement("img");
		imageShoePicture3.setAttribute("src", "./produkty/T-Warstwa%20135%20kopia%202.png");
		imageShoePicture3.setAttribute("alt", "czarne botki");
		shoePicture3ForTablet.appendChild(imageShoePicture3);
		shoePicture3ForSmall.replaceWith(shoePicture3ForTablet);

		const shoePicture4ForTablet = document.createElement("div");
		shoePicture4ForTablet.classList.add("shoe-picture4");
		const imageShoePicture4 = document.createElement("img");
		imageShoePicture4.setAttribute("src", "./produkty/T-Warstwa%20136%20kopia%202.png");
		imageShoePicture4.setAttribute("alt", "białe buty sportowe");
		shoePicture4ForTablet.appendChild(imageShoePicture4);
		shoePicture4ForSmall.replaceWith(shoePicture4ForTablet);

		/* replacing pictures in <<LONDON SHINES section>> */
		const londonShinesPhotoForSmall = document.querySelector("div.london-shines-picture");
		const londonShinesGifPicForSmall = document.querySelector("div.gif-picture2");
		const mothClubPhotoForSmall = document.querySelector("div.moth-picture");

		const londonShinesPhotoForTablet = document.createElement("div");
		londonShinesPhotoForTablet.classList.add("london-shines-picture");
		const adihdSistersPhoto = document.createElement("img");
		adihdSistersPhoto.setAttribute("src", "./img/T-Bez-nazwy-7_11.jpg");
		adihdSistersPhoto.setAttribute("alt", "ADiHD sisters in London night street");
		londonShinesPhotoForTablet.appendChild(adihdSistersPhoto);
		londonShinesPhotoForSmall.replaceWith(londonShinesPhotoForTablet);

		const londonShinesGifPicForTablet = document.createElement("div");
		londonShinesGifPicForTablet.classList.add("gif-picture2");
		const londonNightLifeGifPic = document.createElement("img");
		londonNightLifeGifPic.setAttribute("src", "./gif-files/gif1-tablet.gif");
		londonNightLifeGifPic.setAttribute("alt", "London night life");
		londonShinesGifPicForTablet.appendChild(londonNightLifeGifPic);
		londonShinesGifPicForSmall.replaceWith(londonShinesGifPicForTablet);

		const mothClubPhotoForTablet = document.createElement("div");
		mothClubPhotoForTablet.classList.add("moth-picture");
		const mothClubPicture = document.createElement("img");
		mothClubPicture.setAttribute("src", "./img/T-pic1_11.jpg");
		mothClubPicture.setAttribute("alt", "Moth club models");
		mothClubPhotoForTablet.appendChild(mothClubPicture);
		mothClubPhotoForSmall.replaceWith(mothClubPhotoForTablet);

		/* replacing pictures in <<CLOTHING offer>> section */
		const clothingImg1ForSmall = document.querySelector("div.clothing-img1");
		const clothingImg2ForSmall = document.querySelector("div.clothing-img2");
		const clothingImg3ForSmall = document.querySelector("div.clothing-img3");
		const clothingImg4ForSmall = document.querySelector("div.clothing-img4");

		const clothingImg1ForTablet = document.createElement("div");
		clothingImg1ForTablet.classList.add("clothing-img1");
		const clothingImgage1 = document.createElement("img");
		clothingImgage1.setAttribute("src", "./produkty/T-Warstwa%20151%20kopia%202.png");
		clothingImgage1.setAttribute("alt", "zielona kurtka");
		clothingImg1ForTablet.appendChild(clothingImgage1);
		clothingImg1ForSmall.replaceWith(clothingImg1ForTablet);

		const clothingImg2ForTablet = document.createElement("div");
		clothingImg2ForTablet.classList.add("clothing-img2");
		const clothingImgage2 = document.createElement("img");
		clothingImgage2.setAttribute("src", "./produkty/T-Warstwa%20154%20kopia%202.png");
		clothingImgage2.setAttribute("alt", "czarna sukienka");
		clothingImg2ForTablet.appendChild(clothingImgage2);
		clothingImg2ForSmall.replaceWith(clothingImg2ForTablet);

		const clothingImg3ForTablet = document.createElement("div");
		clothingImg3ForTablet.classList.add("clothing-img3");
		const clothingImgage3 = document.createElement("img");
		clothingImgage3.setAttribute("src", "./produkty/T-Warstwa%20152%20kopia%202.png");
		clothingImgage3.setAttribute("alt", "czarne legginsy");
		clothingImg3ForTablet.appendChild(clothingImgage3);
		clothingImg3ForSmall.replaceWith(clothingImg3ForTablet);

		const clothingImg4ForTablet = document.createElement("div");
		clothingImg4ForTablet.classList.add("clothing-img4");
		const clothingImgage4 = document.createElement("img");
		clothingImgage4.setAttribute("src", "./produkty/T-Warstwa%20153%20kopia%202.png");
		clothingImgage4.setAttribute("alt", "czarna sukienka");
		clothingImg4ForTablet.appendChild(clothingImgage4);
		clothingImg4ForSmall.replaceWith(clothingImg4ForTablet);
	}
}
