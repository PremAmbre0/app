<template>
    <div class="vertical-slider">
        <div class="left-side" :style="{ 'transform': 'translateY(' + lefty + 'vh)' }">
            <div v-for="slide in slides" :key="slide.no" class="left-side-header"
                :style="{ 'background-color': slide.color }">
                <div class="left-side-heading">
                    {{ slide.heading }}
                </div>
                <div class="left-side-text">
                    {{ slide.text }}
                </div>
            </div>
        </div>
        <div class="right-side" :style="{ 'transform': 'translateY(' + righty + 'vh)' }">
            <div v-for="slide in slides" :key="slide.no" :style="{ 'background-image': 'url(' + slide.url + ')' }"
                class="right-side-img"></div>
        </div>
        <div class="buttons">
            <div class="buttons-up btn" @click="buttonUp"><i class="fas fa-arrow-up"></i>
            </div>
            <div class="buttons-down btn" @click="buttonDown"><i class="fas fa-arrow-down"></i></div>
        </div>
    </div>

</template>


<script>
export default {
    data() {
        return {
            lefty: -300,
            righty: 0,
            slides: [
                {
                    no: 1,
                    heading: 'Flying eagle',
                    text: 'in the sunset',
                    color: '#FFB866',
                    url: "https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80"
                },
                {
                    no: 2,
                    heading: 'Lonely castle',
                    text: 'in the wilderness',
                    color: '#252E33',
                    url: 'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80'
                },
                {
                    no: 3,
                    heading: 'Bluuue Sky',
                    text: "with it's mountains",
                    color: '#2A86BA ',
                    url: 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80'
                },
                {
                    no: 4,
                    heading: 'Nature Flower',
                    text: 'all pink',
                    color: '#FD3555',
                    url: 'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80'
                }
            ]
        }
    },
    methods: {
        buttonUp() {
            if (this.lefty < 0 && this.righty > -300) {
                this.lefty += 100;
                this.righty -= 100;
            }
            else {
                this.lefty = -300;
                this.righty = 0;
            }
        },
        buttonDown() {
            if (this.lefty > -300 && this.righty < 0) {
                this.lefty -= 100;
                this.righty += 100;
            }
            else {
                this.lefty = 0;
                this.righty = -300;
            }
        }
    },
}
</script>


<style lang="scss" scoped>
.vertical-slider {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

}

.left-side {
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s ease-in-out;
    &-header {
        height: 100vh;
        width: 35vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    &-heading {
        font-weight: 700;
        font-size: 30px;
        color: #fff;
        margin-bottom: 10px;
        margin-top: -30px;
    }

    &-text {
        color: #fff;
        font-size: 16px;
    }
}

.right-side {
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.5s ease-in-out;
    &-img {
        height: 100vh;
        width: 65vw;
        background-size: cover;
    }
}

.buttons {
    position: absolute;
    top: 40%;
    left: 31.5vw;
    height: 7vw;
    width: 7vw;
    z-index: 10;

    &-up {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px 0 0 10px;
    }

    &-down {
        position: absolute;
        right: 0;
        bottom: 0;
        border-radius: 0 10px 10px 0;
    }
}

.btn {
    height: 50%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #aaa;
    cursor: pointer;
}

.btn:hover {
    color: #222;
}

.btn:focus {
    outline: none;
}
</style>