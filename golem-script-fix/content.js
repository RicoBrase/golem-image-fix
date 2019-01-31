// FIX LAZY LOADING IMAGES

var images = document.getElementsByClassName('golem-data-afterload');
for (var i = 0; i < images.length; i++) {
	images[i]['src'] = images[i].getAttribute('data-src');
}

// FIX LINK TO COMMENT SECTION FOR PROMO ARTICLE

var promoArticle = document.getElementById('index-promo');
if (promoArticle !== null)
	buildCommentsLink(promoArticle);

// FIX LINK TO COMMENT SECTION FOR ALL OTHER ARTICLES

/**
 * @type {NodeListOf<HTMLElement>}
 */
var articleList = document.querySelectorAll('div > section > ol.list-articles');

for (var i = 0; i < articleList.length; i++) {
	for (var article of articleList[i].querySelectorAll('li:not(.sp-breakout)')) {
		buildCommentsLink(article);
	}
}

/**
 *
 * @param {string} articleURL
 * @returns {string}
 */
function buildCommentsURL(articleURL) {
	return articleURL + '#comments';
}

/**
 *
 * @param {HTMLElement} article
 */
function buildCommentsLink(article) {
	var articleLink = article.querySelector('header.cluster-header > a').getAttribute("href");
	var articleCommentSpan = article.querySelector('div.icons-wrapper > span.icon-comments');
	var articleCommentLink = document.createElement('a');

	articleCommentLink.classList.add('icon-comments');
	articleCommentLink.innerHTML = articleCommentSpan.innerHTML;
	articleCommentLink.setAttribute('href', buildCommentsURL(articleLink));
	articleCommentSpan.replaceWith(articleCommentLink);
}

// FIX HERO VIDEO IMAGE ALTERNATIVE IN ARTICLES
var hero = document.querySelector("figure.hero");
if (hero && hero.getElementsByClassName("gvideofig").length > 0) {
	var noscript = hero.getElementsByTagName("noscript")[0];
	var parser = new DOMParser();
	var img = parser.parseFromString(noscript.innerHTML, "text/html").getElementsByTagName("img")[0];

	hero.prepend(img);
}