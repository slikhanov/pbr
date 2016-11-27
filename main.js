// Setting up renderer and hooking it up to the web page view.
var engine = new Engine(window.innerWidth, window.innerHeight);
engine.AddLight(new THREE.Vector3(20, 20, 20));

document.body.appendChild(engine.renderer.domElement);


function render() 
{ 
    requestAnimationFrame(render); 
    engine.Render();
} 

render();

