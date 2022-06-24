<template>
    <div class="notification-container">
        <button class="btn" @click="createPersistantAndNotRemoveableNotification">create non-removeable persistant notification </button>
        <button class="btn" @click="createNormalNotification">create notification</button>
        <button class="btn" @click="createPersistantAndRemoveableNotification">create removeable persistant notification</button>
        <div class="notifications">
            <div v-for="(notification) in notifications" :key="notification.time" class="noti">{{ notification.message
            }} <span v-if="notification.classification=='removeableandPersistant'" class="cross" @click="removeNotification(notification)">X</span>
            </div>
            
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            notifications: [],
            messages: ["hiii!!!", "you cant remove me!!", "click the cross mark to remove me!"],
        }
    },
    methods: {
        notificationMaker(msg,type){
            let now = new Date();
            let time = now.getTime();
            let notification = { message:msg, time, classification:type }
            this.notifications.push(notification);
            console.log(this.notifications);
            return notification;
        },
        removeNotification(item) {
            const keyToRemove = item.time
            this.notifications = this.notifications.filter((div) => div.time != keyToRemove)
        },
        createNormalNotification() {
            let notification = this.notificationMaker(this.messages[0],'normal');
            setTimeout(() => {
                this.removeNotification(notification);
            }, 1000);
        },
        createPersistantAndNotRemoveableNotification() {
            this.notificationMaker(this.messages[1],'nonRemoveableandPersistant');
        },
        createPersistantAndRemoveableNotification(){
            this.notificationMaker(this.messages[2],'removeableandPersistant');
        }
    },
}
</script>

<style scoped>
.notification-container {
    background-color: rebeccapurple;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
}
 
.btn {
    height: 50px;
    width: 200px;
    background-color: #ffffff;
    color: rebeccapurple;
    font-family: inherit;
    font-weight: bold;
    padding: 1rem;
    margin: 0 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

.btn:focus {
    outline: none;
}

.btn:active {
    transform: scale(0.98);
}

.notifications {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.noti {
    height:5rem;
    width: 20rem;
    font-size:medium;
    background-color: #fff;
    border-radius: 5px;
    padding: 1rem 2rem;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position:relative;
    overflow: hidden;
}
.cross{
    position: absolute;
    right:0rem;
    top: 0rem;
    height:3rem;
    width: 3rem;
    cursor: pointer;
    background-color:#f7f7f7;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>