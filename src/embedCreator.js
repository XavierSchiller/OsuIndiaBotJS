class embed {
  constructor(title, desc) {
    this.embed = {};
    this.embed.title = title;
    this.embed.description = desc;
    this.embed.color = 0xff000a;
  }
  withTitle(title) {
    this.embed.title = title;
  }
  withDesc(Desc) {
    this.embed.description = Desc;
  }
  withAuthor(name, avatarUrl) {
    this.embed.author = {};
    this.embed.author.name = name;
    this.embed.author.icon_url = avatarUrl;
  }
  withThumb(url) {
    this.embed.thumbnail = {};
    this.embed.thumbnail.url = url;
  }
  withImg(imgurl) {
    this.embed.image = {};
    this.embed.image.url = imgurl;
  }
  construct() {
    return JSON.stringify(this);
  }
}
module.exports = embed;
