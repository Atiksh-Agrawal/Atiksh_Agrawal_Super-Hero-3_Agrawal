

var canvas = new fabric.Canvas('myCanvas');

player_x = 1;
player_y = 1;

block_image_width = 90;
block_image_height = 90;

var player_object = "";
var block_object = "";

function player_update() {

    fabric.Image.fromURL("GROOT.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
        
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", keydown_My);

function keydown_My(e) {
    key_press = e.keyCode;
    
    if (key_press == 38) {
        up();
    }

    if (key_press == 40) {
        down();
    }

    if (key_press == 37) {
        left();
    }

    if (key_press == 39) {
        right();
    }

    if (key_press == 73) {
        new_image('IRON_MAN_HEAD.png');
    }

    if (key_press == 83) {
        new_image('SPIDER_MAN_BODY.png');
    }

    if (key_press == 84) {
        new_image('THOR_MIJOLINIR_HAND.png');
    }

    if (key_press == 67) {
        new_image('CAPTAIN_AMERICA_SHIELD_HAND.png');
    }

    if (key_press == 72) {
        new_image('HULK_LEGS.png');
    }

    

    if (e.shiftKey == true && key_press == 66) {
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && key_press == 83) {
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
}

function up() {
    
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    
    if (player_y >= 0) {
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x >= 0) {
        player_x = player_x + block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}