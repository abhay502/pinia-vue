<template>
    <div class="task">
        <h5>{{ props.task.title }}</h5>
        <div class="icons">
            <i class="material-icons" @click="deleteTask(props.task.id)">delete</i>
            <i class="material-icons" @click="addFav(props.task.id)" :class="{active:props.task.isFav}">favorite</i>

        </div>
    </div>
</template> 

<script setup>
import { useTaskStore } from '@/stores/task-store';
import { defineProps } from 'vue';
const taskStore = useTaskStore()

const props = defineProps(['task']);

const deleteTask = (id)=>{
    taskStore.deleteTask(id)
}

const addFav  = (id)=>{
    taskStore.addFavs(id)
}
// Now you can access the task prop as task.title or destructure it
</script>

