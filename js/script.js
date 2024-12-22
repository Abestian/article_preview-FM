'use strict';

const shareBtn = document.querySelector('.share-btn');
const closeBtn = document.querySelector('.close-btn');
const tooltipMobile = document.querySelector('.tooltip-mobile');
const tooltipTablet = document.querySelector('.tooltip-tablet');

const handleTooltips = () => {
	if (window.innerWidth >= 992) {
		tooltipTablet.classList.toggle('tooltip-active');
	} else {
		tooltipMobile.classList.toggle('tooltip-active');
	}
};

shareBtn.addEventListener('click', handleTooltips);
closeBtn.addEventListener('click', handleTooltips);
