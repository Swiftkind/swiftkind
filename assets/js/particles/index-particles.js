
setTimeout(function() {
    //////////////settings/////////
    var movementSpeed = 80;
    var totalObjects = 1000;
    var objectSize = 10;
    var sizeRandomness = 2000;
    var colors = [0x09132e, 0x1B253E, 0x1B253E, 0x1B253E, 0x1B253E];
    /////////////////////////////////
    var dirs = [];
    var parts = [];

    var container = document.createElement('div');
    container.classList.add('fireworks');
    document.body.appendChild(container);


    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
    camera.position.z = 1000;

    var scene = new THREE.Scene();

    function ExplodeAnimation(x, y) {
        var geometry = new THREE.Geometry();

        for (i = 0; i < totalObjects; i++) {
            var vertex = new THREE.Vector3();
            vertex.x = x;
            vertex.y = y;
            vertex.z = 0;

            geometry.vertices.push(vertex);
            dirs.push({ x: (Math.random() * movementSpeed) - (movementSpeed / 2), y: (Math.random() * movementSpeed) - (movementSpeed / 2), z: (Math.random() * movementSpeed) - (movementSpeed / 2) });
        }
        var material = new THREE.ParticleBasicMaterial({ size: objectSize, color: colors[Math.round(Math.random() * colors.length)] });
        var particles = new THREE.ParticleSystem(geometry, material);

        this.object = particles;
        this.status = true;

        this.xDir = (Math.random() * movementSpeed) - (movementSpeed / 2);
        this.yDir = (Math.random() * movementSpeed) - (movementSpeed / 2);
        this.zDir = (Math.random() * movementSpeed) - (movementSpeed / 2);

        scene.add(this.object);

        this.update = function() {
            if (this.status == true) {
                var pCount = totalObjects;
                while (pCount--) {
                    var particle = this.object.geometry.vertices[pCount]
                    particle.y += dirs[pCount].y;
                    particle.x += dirs[pCount].x;
                    particle.z += dirs[pCount].z;
                }
                this.object.geometry.verticesNeedUpdate = true;
            }
        }

    }

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    renderer.render(scene, camera);
    parts.push(new ExplodeAnimation(0, 0));
    render();

    function render() {
        requestAnimationFrame(render);

        var pCount = parts.length;
        while (pCount--) {
            parts[pCount].update();
        }

        renderer.render(scene, camera);

    }


    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    //intro swiper
    var intro = new Swiper('.intro-swiper', {
        loop: false,
        autoplay: {
            delay: 2000,
        },
        effect: 'fade',

    });
    intro.on('slideChange', function() {
        if (intro.isEnd) {
            setTimeout(function() {
                window.location.href = "/?intro=0";
            }, 500);
        }
    });

}, 4000);