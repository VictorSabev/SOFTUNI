// Problem 2 - Art Gallery

class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    let currentArticleModel = articleModel.toLowerCase();
    if (!this.possibleArticles[currentArticleModel]) {
      throw new Error('This article model is not included in this gallery!');
    }

    if (
      !this.listOfArticles.some((x) => x.articleModel === currentArticleModel)
    ) {
      this.listOfArticles.push({
        articleModel: articleModel.toLowerCase(),
        articleName,
        quantity,
      });
    } else {
      let currentElement = this.listOfArticles.find(
        (x) => x.articleName === articleName
      );
      currentElement.quantity++;
    }
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    let points = 0;

    if (personality === 'Vip') {
      points = 500;
    } else if (personality === 'Middle') {
      points = 250;
    } else {
      points = 50;
    }

    if (!this.guests.some((x) => x.guestName === guestName)) {
      this.guests.push({
        guestName,
        points,
        purchaseArticle: 0,
      });
    } else {
      throw new Error(`${guestName} has already been invited.`);
    }

    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    let cuurentArticle = this.listOfArticles.find(
      (x) => x.articleName === articleName
    );

    if (cuurentArticle.articleModel !== articleModel || !cuurentArticle) {
      throw new Error('This article is not found.');
    }

    if (cuurentArticle.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    let currentGuest = this.guests.find((x) => x.guestName === guestName);

    if (!currentGuest) {
      // POTENTIAL PROBLEM
      return 'This guest is not invited.';
    }

    let currentPrice = cuurentArticle.articleModel;

    if (currentGuest.points < this.possibleArticles[currentPrice]) {
      return 'You need to more points to purchase the article.';
    } else {
      currentGuest.points -= this.possibleArticles[currentPrice];
      cuurentArticle.quantity--;
      currentGuest.purchaseArticle++;
    }
    return `${guestName} successfully purchased the article worth ${this.possibleArticles[currentPrice]} points.`;
  }

  showGalleryInfo(criteria) {
    let result = [];
    if (criteria === 'article') {
      result.push('Articles information:');
      this.listOfArticles.forEach((x) => {
        result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`);
      });
    } else if (criteria === 'guest') {
      result.push('Guests information:');
      this.guests.forEach((x) => {
        result.push(`${x.guestName} - ${x.purchaseArticle}`);
      });
    }
    return result.join('\n');
  }
}

const artGallery = new ArtGallery('Curtis Mayfield');

artGallery.addArticle('picture', 'Mona Liza', 3);

artGallery.addArticle('Item', 'Ancient vase', 2);

artGallery.addArticle('picture', 'Mona Liza', 1);

artGallery.inviteGuest('John', 'Vip');

artGallery.inviteGuest('Peter', 'Middle');

artGallery.buyArticle('picture', 'Mona Liza', 'John');

artGallery.buyArticle('item', 'Ancient vase', 'Peter');

console.log(artGallery.showGalleryInfo('article'));

console.log(artGallery.showGalleryInfo('guest'));