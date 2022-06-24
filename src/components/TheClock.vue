<template>
    <div div class="container">
        <div class="analog-clock">
            <div class="analog-clock-hand analog-clock-hourhand" :style="{'transform':`rotate(${hour*30}deg)`}"></div>
            <div class="analog-clock-hand analog-clock-minutehand" :style="{'transform':`rotate(${minute*6}deg)`}"></div>
            <div class="analog-clock-hand analog-clock-secondhand" :style="{'transform':`rotate(${second*6}deg)`}"></div>
            <div v-for="i in 12" :key="i" class="analog-clock--nums" :style="{ 'transform': `rotate(${i * 30}deg)` }">{{
                    i
            }}
            </div>
        </div>
        <div class="digital-clock">
            <div class="digital-clock-time">{{ hour > 12 ? hour -= 12 : hour }}:{{ minute }}:{{ second }} {{ hour > 12
                    ? "AM" : "PM"
            }}</div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            hour: "0",
            minute: "0",
            second: "0",

        }
    },
    mounted() {
        this.getTime();
    },
    methods: {
        getTime() {
            const now = new Date();
            this.hour = now.getHours();
            this.minute = now.getMinutes();
            this.second = now.getSeconds()
            this.upadteClock();
        },
        upadteClock() {
            setInterval(this.getTime, 1000);
        }
    }
}
</script>


<style lang="scss" scoped>
.container {
    padding: 5rem;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.analog-clock {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30rem;
    width: 30rem;
    margin: 2rem auto;

    &--nums {
        height: 30rem;
        width: 30rem;
        font-size: 1rem;
        position: absolute;
    }

    &-hand {
        position: absolute;
        background: #000;
        height: 50%;
        width: 0.3rem;
        left: 50%;
        bottom: 50%;
        transform-origin: bottom;
    }
}

.digital-clock {
    margin: 2rem auto;

    &-time {
        font-size: 5rem;
    }
}
</style>