// FIX LAZY LOADING IMAGES

var images = document.getElementsByClassName('golem-data-afterload');
for (var i = 0; i < images.length; i++) {
	images[i]['src'] = images[i].getAttribute('data-src');
}

// FIX LINK TO COMMENT SECTION FOR PROMO ARTICLE

var promoArticle = document.getElementById('index-promo');
buildCommentsLink(promoArticle);

// FIX LINK TO COMMENT SECTION FOR ALL OTHER ARTICLES

/**
 * @type {NodeListOf<HTMLElement>}
 */
var articleList = document.querySelectorAll('div > section > ol.list-articles');

for (var i = 0; i < articleList.length; i++) {
	for (var article of articleList[i].querySelectorAll('li')) {
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
	var articleLink = article.querySelector('header > a').getAttribute('href');
	var articleCommentSpan = article.querySelector('div.icons-wrapper > span.icon-comments');
	var articleCommentLink = document.createElement('a');

	articleCommentLink.classList.add('icon-comments');
	articleCommentLink.innerHTML = articleCommentSpan.innerHTML;
	articleCommentLink.setAttribute('href', buildCommentsURL(articleLink));
	articleCommentSpan.replaceWith(articleCommentLink);
}