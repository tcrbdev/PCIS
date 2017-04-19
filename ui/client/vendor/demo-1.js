export const iniAnimate = (objCanvas) => {

    var width, height, canvas, ctx, points, target, animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    // addListeners();

    function initHeader() {
        width = 400;
        height = 400;
        target = { x: width / 2, y: height / 2 };

        canvas = objCanvas;
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create points
        points = [];
        for (var x = 0; x < width; x = x + width / 20) {
            for (var y = 0; y < height; y = y + height / 20) {
                var px = x + Math.random() * width / 20;
                var py = y + Math.random() * height / 20;
                var p = { x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for (var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for (var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if (!(p1 == p2)) {
                    var placed = false;
                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for (var i in points) {
            var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        if (!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        var posy = 0;
        var posx = posy;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if (document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    // animation
    function initAnimation() {
        animate();
        for (var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for (var i in points) {
                // detect points in range
                if (Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1 + 1 * Math.random(), {
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100, ease: Circ.easeInOut,
            onComplete: function () {
                shiftPoint(p);
            }
        });
    }

    // Canvas manipulation
    function drawLines(p) {
        if (!p.active) return;
        for (var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
            ctx.stroke();
        }
    }

    function Circle(pos, rad, color) {
        var _this = this;

        // constructor
        (function () {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function () {
            if (!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(156,217,249,' + _this.active + ')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

};

export const iniNetWorkAnimate = (objCanvas) => {

    var canvas = objCanvas;
    canvas.width = 400;
    canvas.height = 100;
    var ctx = canvas.getContext("2d");

    var TAU = 2 * Math.PI;

    var times = [];
    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        update();
        draw();
        requestAnimationFrame(loop);
    }

    function Ball(startX, startY, startVelX, startVelY) {
        this.x = startX || Math.random() * canvas.width;
        this.y = startY || Math.random() * canvas.height;
        this.vel = {
            x: startVelX || Math.random() * 2 - 1,
            y: startVelY || Math.random() * 2 - 1
        };
        this.update = function (canvas) {
            if (this.x > canvas.width + 50 || this.x < -50) {
                this.vel.x = -this.vel.x;
            }
            if (this.y > canvas.height + 50 || this.y < -50) {
                this.vel.y = -this.vel.y;
            }
            this.x += this.vel.x;
            this.y += this.vel.y;
        };
        this.draw = function (ctx, can) {
            ctx.beginPath();
            ctx.globalAlpha = .4;
            ctx.fillStyle = '#448fda';
            ctx.arc((0.5 + this.x) | 0, (0.5 + this.y) | 0, 3, 0, TAU, false);
            ctx.fill();
        }
    }

    var balls = [];
    for (var i = 0; i < canvas.width * canvas.height / (65 * 65); i++) {
        balls.push(new Ball(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    var lastTime = Date.now();
    function update() {
        var diff = Date.now() - lastTime;
        for (var frame = 0; frame * 16.6667 < diff; frame++) {
            for (var index = 0; index < balls.length; index++) {
                balls[index].update(canvas);
            }
        }
        lastTime = Date.now();
    }
    var mouseX = -1e9, mouseY = -1e9;
    document.addEventListener('mousemove', function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function distMouse(ball) {
        return Math.hypot(ball.x - mouseX, ball.y - mouseY);
    }

    function draw() {
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'rgba(1,1,1,.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (var index = 0; index < balls.length; index++) {
            var ball = balls[index];
            ball.draw(ctx, canvas);
            ctx.beginPath();
            for (var index2 = balls.length - 1; index2 > index; index2 += -1) {
                var ball2 = balls[index2];
                var dist = Math.hypot(ball.x - ball2.x, ball.y - ball2.y);
                if (dist < 100) {
                    // var grad = ctx.createLinearGradient(50, 50, 150, 150);
                    // grad.addColorStop(0, "red");
                    // grad.addColorStop(1, "green");
                    ctx.strokeStyle = "rgba(156,217,249,.5)";
                    // ctx.strokeStyle = grad;
                    ctx.globalAlpha = 1 - (dist > 100 ? .8 : dist / 150);
                    ctx.lineWidth = "2px";
                    ctx.moveTo((0.5 + ball.x) | 0, (0.5 + ball.y) | 0);
                    ctx.lineTo((0.5 + ball2.x) | 0, (0.5 + ball2.y) | 0);
                }
            }
            ctx.stroke();
        }
    }

    // Start
    loop();
}

export const iniBubble = (objCanvas) => {
    var width, height, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = { x: 0, y: height };

        canvas = objCanvas;
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for (var x = 0; x < width * 0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if (document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for (var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function () {
            _this.pos = {};
            init();
        })();

        function init() {
            _this.pos.x = Math.random() * width;
            _this.pos.y = height + Math.random() * 100;
            _this.alpha = 0.1 + Math.random() * 0.3;
            _this.scale = 0.1 + Math.random() * 0.3;
            _this.velocity = Math.random();
        }

        this.draw = function () {
            if (_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
            ctx.fill();
        };
    }
}
