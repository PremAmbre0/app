<template>
    <div class="container">
        <div class="progress-container">
            <div class="progress-bar" :style="{ 'width': `${progressbar}%` }"></div>
            <div v-for="i in 4" :key="i" class="circle" :class="{ 'active': isActive >= i }">{{ i }}</div>
        </div>
        <div class="btns">
            <button class="btn" @click="next" :disabled="!isDisabled">Next</button>
            <button class="btn" @click="prev" :disabled="isDisabled">Prev</button>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            isActive: 1,
            progressbar: 0,
            isDisabled:true,
        }
    },
    methods: {
        next() {
            if (this.isActive > 0 && this.isActive < 4) {
                if(this.isActive == 3){
                    this.isDisabled = false;
                }
                this.isActive += 1;
                this.progressbar += 33.33;
            }
        },
        prev() {
            if (this.isActive >= 0 && this.isActive <=4) {
                if(this.isActive == 2){
                    this.isDisabled = true;
                }
                this.isActive -= 1;
                this.progressbar -= 33.33;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
$blue: #3498db;
$light-grey: #e0e0e0;

.container {
    font-family: 'Muli', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    overflow: hidden;
    flex-direction: column;
    margin: 0;
}

.progress-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 30px;
    max-width: 100%;
    width: 350px;
}

.progress-container::before {
    content: '';
    background-color: $light-grey;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
}

.progress-bar {
    background-color: $blue;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 0%;
    z-index: -1;
    transition: 0.4s ease;
}

.circle {
    background-color: #fff;
    color: #999;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid $light-grey;
    transition: 0.4s ease;
}

.circle.active {
    border-color: $blue;
}

.btn {
    height: 30px;
    width: 90px;
    background-color: $blue;
    color: #fff;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    padding: 8px 30px;
    margin: 5px;
    font-size: 14px;
}

.btn:active {
    transform: scale(0.98);
}

.btn:focus {
    outline: 0;
}

.btn:disabled {
    background-color: $light-grey;
    cursor: not-allowed;
}
</style>