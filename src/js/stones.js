function STONEScomputeVelocity(STONESVelocity, STONESAcceleration, STONESDrag, STONESMax, STONESElapsed) {
    if (STONESAcceleration != 0) {
        STONESVelocity += STONESAcceleration * STONESElapsed;
    }
    else if (STONESDrag != 0) {
        var STONESdrag = STONESDrag * STONESElapsed;
        if (STONESVelocity - STONESdrag > 0) {
            STONESVelocity -= STONESdrag;
        }
        else if (STONESVelocity + STONESdrag < 0) {
            STONESVelocity += STONESdrag;
        }
        else {
            STONESVelocity = 0;
        }
    }
    if ((STONESVelocity != 0) && (STONESMax != 0)) {
        if (STONESVelocity > STONESMax) {
            STONESVelocity = STONESMax;
        }
        else if (STONESVelocity < -STONESMax) {
            STONESVelocity = -STONESMax;
        }
    }
    return STONESVelocity;
}

function STONESgetRandomNumber(min, max){return Math.random() * (max - min) + min;}

let STONESsprites = [
    ["url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA2CAMAAADj5An2AAAAWlBMVEUAAACJiH4AAAB5dmqJmJlnZVmkpKOIh3+KprSJkIxwbmKCgHSIl5hSUlGXnp56d2q1tbRGRkBBQjs0My2KprKXnqCJkIuCiIJ4fnmCfXRtbGhxb2MpKSkYGBZrpBEtAAAAAXRSTlMAQObYZgAAAWRJREFUOMuN1N16gjAMgOElTQkKDHXuf7v/21wSQgKVg32P1YO3QaU+PkkoPR2H0XSEVMr7x/UXsw0CsD2+fnDTghWiz2JBCRxBYluD2ay+KBbw67I8lzVHyBJzMhrsohrvkQ09gOayiXNiB7sEGAIJPP20s95G2R/vyaFDQQ8cbxBdUSqMkiM2OMrUBQK3VawwITV4GukkL4TIFYG3+EaeYkGISZYxSlQpgdAi4RToNupSlNXt0XrtOup7op7g5siOz51mKOoILY6yLogLyqiZ4zK9oo269o7gSMAbNhTdHKgrCdxtA+WZpdok9bQiQqh2J1LsHEsZ7Ge9cGd3Sr+Lo7LGrGiTFKjKsETEIwFB4FZJHWDFenb2WYYNKqSy71jxfA4X8g2BNbWsmlidQwOhJKbmpGnWYjtbHI0ehgODsv9NZo84fx+omulLzVo0zQKPtTo6R1MtoGeDit6E+8La4v/+Dz0CEmb8jF2bAAAAAElFTkSuQmCC')", 28, 54],
    ["url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAWCAMAAAAPf7fDAAAAP1BMVEUAAAAAAACJUYGaP2GIUoC0JlC7OV+LUYEvFR0CAACrUHVxUmmyJlBfP1dIMUc0LDASEBKaa5BxUmhYWFlKFiJsSlsMAAAAAXRSTlMAQObYZgAAAMRJREFUKM99kQsSgyAMRAsJCGit/dz/rM0aIIV2ujNo5O1OhFw+5UTDxkhVf+nNTN/YQ65pxr7pce0GwxmEq2PxPmU4xjTbqo0M/xD4hBd98YKKBXTO3NubVbjiFx4wXM3QeHaJDj1+6q2YlTvkS6RdyjWry1qAy9q2SM7dPSiJukF5CiEUieOTTrH1R144SXQ9eawGBlZOQTY9fm+niJpqOrfJFY0UEr4ptxHp4HEfQkKIhdbUKfR0psPKYf6jssHZNJE3PoEFKNeMVzYAAAAASUVORK5CYII=')", 31, 22],
    ["url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAHlBMVEUAAAAAAABoQzt5VE6Nal9pQztWVlZKPDkBAAAYEg9uzm/lAAAAAXRSTlMAQObYZgAAAIdJREFUCNdFztENAiEQBFDo4MZDjb+DxG9YLEDpgMQCLEUrlwnxbr/2ZZKddc55wG0D7PIrY/4Lz8T6BjADvqy2m+SP7IzWasPi/L0nxhIeIS8OZKKVUw5toLOTFSacKV1hq41EQYoXC0WggKwD/kvdhjW1QuDBRjBaP9ToPQkwAxRMbbs41x9EMhZZEBdhwQAAAABJRU5ErkJggg==')", 23, 18],
    ["url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAeCAMAAABkHdyoAAAAxlBMVEUAAAAAAACRomM8tCCGj1egpn2zs7SMmV1FvSlNxTKZpHBQUz9IUTJFri+WlpY8piYnYhkTFA+Tm2peXl0lKR0eSxZXXj81NDQ6lyglcRQeWhB4f2NwdlxZWVpLRU1ja0xYWklbZUBDRyw3OiwxeSErWR4qfhkOLwiqrZmcnZeGi2iBjWBCQzxRWTs/oCoqcB4hUxYbQBKlpaWiq4yTl3uLlW5qbVlqqUZLTEVSkjlKejVJUjJEbDFGvCkxYCQ0hx8ICQkHGATjQm+aAAAAAXRSTlMAQObYZgAAAaNJREFUOMuN0udy4jAUhmG+YyRLNja4UEIJnU0v2/tu7v+mciTbYwUxGd5h9IN5+EYGOk1A5+zmKTrnc8wLdOT5nF/p2ZptmgLuG2/z/CWkdPAPpbRSySRRATcBjm+Doh3+FwRTYGCpGgx0EOyP/BhpbZ92/cDp8DgEe43jeYN50euP9v0c3IeLYDo1ov944PNiV3+4Cz78r2LSD6bZ30TxhYGXZwzra2mw5lwtxSWvB5Mnc6okefj9k7UNhgsJtJqIBDDQOhmaVS8zB9S6JEHcEtzd9QLDRPmcKs7EYhrN8jAMicI8RtWh0RpCiLLmZCsAbG/JFn0FsFjg+UF/6+53e4yIhITVQlRGrNjEEdE9bL0wX4ErUVbC8rGgpnUGbMIekK0+5902ooYDsuVRjPGSmG+6b3M4uTxbE81wd3OKS8uFy3FPvB7np3jzpMLhS8N74Qk9qvio5bfbODL8V+jrovmVpLNu+Drb+Dqz2vqCvZu7HdZPCbj/R887lgSsdjxKIT1v9Sc5ttgNTf+3s49XEX25MTi6uv4OGOyHU/nY7x36Ct/zGqfzSyKNAAAAAElFTkSuQmCC')", 46, 30],
    ["url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAOCAMAAADkD+cIAAAATlBMVEUAAAAAAAC2qsijlbl9bpaTgabHwNYeHSMREBJ9bpVmYHJXUlh5eXkzMDuTgqabnJtBO04TEBLc3NvHwNWTg6aUgaacnZx9b5Z8bpQzMjvR59crAAAAAXRSTlMAQObYZgAAALdJREFUGNNlkFcOhDAMRHFPge31/hfdcYQQK94HInkZeeTpn+8SpZRYpgOF9pSd6QRidiDM7hY4rm7B08bOwiti1XA5JFHPyCZFzKqqQqdkTuvdN6ugNkrp4vnpV0kFdzKtsEpT4F6UZvGSfymRfGv96IUmCiSCbuy0QJ0McgWtqQ3rcsc7S3JkVWuUYzv6pJU23DNHmjWsbDR2FpslQw87o0O7RCEEB7mjc3Z9zT2uBFJtxGG9Gz+jDAYWlFcYfAAAAABJRU5ErkJggg==')", 29, 14]
]

let [STONESsprite, STONEScatW, STONEScatH] = STONESsprites[Math.floor(Math.random() * STONESsprites.length)];

STONEScatW = parseInt(STONEScatW * 2);
STONEScatH = parseInt(STONEScatH * 2);

let STONESmouseX = 0;
let STONESmouseY = 0;

// Get the container div
const STONEScontainer = document.getElementById('rock-garden-area');
let STONEScontainerRect = STONEScontainer ? STONEScontainer.getBoundingClientRect() : {left:0,top:0,width:window.innerWidth,height:window.innerHeight};

let STONEScatX = STONESgetRandomNumber(0, STONEScontainerRect.width - STONEScatW);
let STONEScatY = 0;

let STONEScatPX = 0;
let STONEScatPY = 0;
let STONEScatPX2 = 0;
let STONEScatPY2 = 0;
let STONEScatPX3 = 0;
let STONEScatPY3 = 0;

let STONEScatVX = STONESgetRandomNumber(-500, 500);
let STONEScatVY = 0;

let STONESgravity = 800

let STONESairdrag = STONESgravity / 2.75;
let STONESbottomdrag = STONESgravity * 2;

let STONESxdrag = STONESairdrag;
let STONESaccel = STONESgravity;

let STONEStFPS = 60;
let STONEStFTIM = 1 / STONEStFPS;

let STONESgrabbed = false;

let STONESgraboX = 0;
let STONESgraboY = 0;

function STONESgTime() {
    return Date.now() / 1000;
}

let STONESstartTime = null;
let STONESprevtime = null;
let STONESstanding = false;

function STONESdisableTextSelection() {
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
}

function STONESenableTextSelection() {
    document.body.style.userSelect = 'auto';
    document.body.style.webkitUserSelect = 'auto';
    document.body.style.mozUserSelect = 'auto';
    document.body.style.msUserSelect = 'auto';
}

window.addEventListener('mouseup', function (event) {
    STONESenableTextSelection();
});


function STONEScatty() {
    if (!STONEScontainer) return;
    // Update container rect in case of resize
    STONEScontainerRect = STONEScontainer.getBoundingClientRect();
    STONEScatX = STONESgetRandomNumber(0, STONEScontainerRect.width - STONEScatW);
    STONEScatY = 0;

    const STONEScatFren = document.createElement("STONEScatFren");
    STONEScatFren.style.setProperty("background-image", STONESsprite, "important");
    STONEScatFren.style.setProperty("background-size", "contain", "important");
    STONEScatFren.style.setProperty("image-rendering", "pixelated", "important");
    STONEScatFren.style.setProperty("width", `${STONEScatW}px`, "important");
    STONEScatFren.style.setProperty("height", `${STONEScatH}px`, "important");
    STONEScatFren.style.setProperty("position", "absolute", "important");
    STONEScatFren.id = "STONEScatFren";
    STONEScatFren.style.setProperty("z-index", "9999999999", "important");

    STONEScatFren.style.setProperty("left", STONEScatX + "px", "important");
    STONEScatFren.style.setProperty("top", STONEScatY + "px", "important");

    STONEScontainer.style.position = "relative";
    STONEScontainer.appendChild(STONEScatFren);

    STONEScatFren.addEventListener('mousedown', function (event) {
        STONESdisableTextSelection();
        STONESgrabbed = true;
        STONESstanding = false;
        // Mouse position relative to container
        const mouseX = event.clientX - STONEScontainerRect.left;
        const mouseY = event.clientY - STONEScontainerRect.top;
        STONESgraboX = STONEScatX - mouseX;
        STONESgraboY = STONEScatY - mouseY;

        STONEScatVX = 0;
        STONEScatVY = 0;
        STONESaccel = 0;
    });

    document.addEventListener("mousemove", function (event) {
        // Mouse position relative to container
        STONESmouseX = event.clientX - STONEScontainerRect.left;
        STONESmouseY = event.clientY - STONEScontainerRect.top;
    });

    window.addEventListener('mouseup', function (event) {
        STONESgrabbed = false;
        STONESaccel = STONESgravity;
        STONESxdrag = STONESairdrag;

        STONESstanding = false;

        STONEScatVX = (STONEScatX - STONEScatPX2) * 11.5;
        STONEScatVY = (STONEScatY - STONEScatPY2) * 11.5;
    });

    function STONESframeUpdate(timestamp) {
        // Update container rect in case of resize
        STONEScontainerRect = STONEScontainer.getBoundingClientRect();

        STONEScatPX3 = STONEScatPX2;
        STONEScatPY3 = STONEScatPY2;

        STONEScatPX2 = STONEScatPX;
        STONEScatPY2 = STONEScatPY;

        STONEScatPX = STONEScatX
        STONEScatPY = STONEScatY

        let STONESelapsed = STONESprevtime == null ? STONEStFTIM : timestamp - STONESprevtime;
        STONESelapsed /= 1000

        if (!STONESgrabbed && !STONESstanding) {
            let STONESvelocityDelta = 0.5 * (STONEScomputeVelocity(STONEScatVX, 0, STONESxdrag, 0, STONESelapsed) - STONEScatVX);
            STONEScatVX += STONESvelocityDelta;
            let STONESdelta = STONEScatVX * STONESelapsed;
            STONEScatVX += STONESvelocityDelta;
            STONEScatX += STONESdelta;

            STONESvelocityDelta = 0.5 * (STONEScomputeVelocity(STONEScatVY, STONESaccel, 0, 0, STONESelapsed) - STONEScatVY);
            STONEScatVY += STONESvelocityDelta;
            STONESdelta = STONEScatVY * STONESelapsed;
            STONEScatVY += STONESvelocityDelta;
            STONEScatY += STONESdelta;
        }
        else if (!STONESstanding) {
            STONEScatX = STONESmouseX + STONESgraboX;
            STONEScatY = STONESmouseY + STONESgraboY;
        }

        // Collision with container bounds
        if (STONEScatX < 0) {
            STONEScatVX *= -0.5;
            STONEScatX = 0;
        }
        if (STONEScatX > STONEScontainerRect.width - STONEScatW) {
            STONEScatX = STONEScontainerRect.width - STONEScatW;
            STONEScatVX *= -0.5;
        }
        if (STONEScatY < 0) {
            STONEScatVY = 0;
            STONEScatY = 0;
        }
        if (STONEScatY > STONEScontainerRect.height - STONEScatH) {
            if (STONEScatVY > 100) {
                STONEScatY = STONEScontainerRect.height - STONEScatH;
                STONEScatVY *= -0.4;
            }
            else {
                STONEScatVY = 0;
                STONESaccel = 0;
                STONEScatY = STONEScontainerRect.height - STONEScatH;
                STONESxdrag = STONESbottomdrag;
                if (!STONESgrabbed) {
                    STONESstanding = true;
                }
            }
        }

        STONEScatFren.style.setProperty("left", STONEScatX + "px", "important");
        STONEScatFren.style.setProperty("top", STONEScatY + "px", "important");

        STONESprevtime = timestamp;
        window.requestAnimationFrame(STONESframeUpdate);
    }

    window.requestAnimationFrame(STONESframeUpdate);
}

STONEScatty();
