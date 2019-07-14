/**
 * Class used to represent embeds.
 */
class Embed {
  /**
   * Constructor
   * @param {string} title The title of the embed.
   * @param {string} desc The Description of the embed.
   */
  constructor(title, desc) {
    this.embed = {};
    this.embed.title = title;
    this.embed.description = desc;
    this.embed.color = 0xff000a;
  }

  /**
   * Adds title to the embed.
   * @param {string} title The title of the embed.
   */
  withTitle(title) {
    this.embed.title = title;
  }

  /**
   * Adds a description to the embed.
   * @param {string} Desc The description of the embed.
   */
  withDesc(Desc) {
    this.embed.description = Desc;
  }

  /**
   * Adds a Author thumbnail.
   * @param {string} name Name of the author.
   * @param {string} avatarUrl URL of the author picture.
   */
  withAuthor(name, avatarUrl) {
    this.embed.author = {};
    this.embed.author.name = name;
    this.embed.author.icon_url = avatarUrl;
  }

  /**
   * Adds a thumbnail to the embed.
   * @param {string} url url of the thumbnail.
   */
  withThumb(url) {
    this.embed.thumbnail = {};
    this.embed.thumbnail.url = url;
  }
  /**
   * Adds a Image to the Embed.
   * @param {string} imgurl URL of the image.
   */
  withImg(imgurl) {
    this.embed.image = {};
    this.embed.image.url = imgurl;
  }
}
module.exports = Embed;
