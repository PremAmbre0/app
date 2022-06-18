<template>
    <div class="ripplecontainer">
        <button class="ripplebutton" ref="button" @click="getxy">Click Me! <span :class="{ripple:isClicked}" :style="{'top':`${y}px`,'left':`${x}px`}"></span></button>
    </div>
</template>


<script>


export default {
    data() {
        return {
            x: 0,
            y: 0,
            isClicked:false
        }
    },
    methods: {
        getxy(e){
            this.isClicked = true
            const windowX = e.clientX;
            const windowY = e.clientY;
            const buttonX = e.target.offsetLeft;
            const buttonY = e.target.offsetTop;

            this.x = windowX - buttonX;
            this.y = windowY - buttonY;
            setTimeout(() => {
                this.isClicked = false;
            }, 300);
        }
    }
}
</script>


<style lang="scss">
.ripplecontainer {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #000;
}

.ripplebutton {
    height: 50px;
    width: 200px;
    ;
    background-color: purple;
    color: #fff;
    border: 1px purple solid;
    overflow: hidden;
    margin: 10px 0;
    position: relative;
    border-radius: 0.5rem;
}

.ripple {
    position: absolute;
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: scale 0.5s ease-out;
}

@keyframes scale {
    to {
        transform: translate(-50%, -50%) scale(3);
        opacity: 0;
    }
}
</style>