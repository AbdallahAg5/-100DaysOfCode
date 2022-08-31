var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: false,
  clipRelativeInput:true
});
parallaxInstance.friction(0.2, 0.2);