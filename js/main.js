var instance = new vidbg(".video", {
  mp4: "video/world.mp4", // URL-адрес или относительный путь к
  webm: "video/world.webpm", // URL или относительный путь к WebM видео
  poster: "video/poster.jpg", // URL или относительный путь к замещающее изображение
  overlay: false, // Логическое для отображения наложения или не
});
var rellax = new Rellax(".rocket");
if (document.body.clientWidth < 576) {
  rellax.destroy();
}
AOS.init();
