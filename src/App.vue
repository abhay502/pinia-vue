<template>
    <main>
        <header>
            <img src="https://pinia.vuejs.org/logo.svg" alt="pinia-logo">
            <h1>Pinia Tasks</h1>
        </header>
        <div class="new-task-form">
          <TaskForm/>
        </div>
        <nav class="filter">
            <button   @click="filter='all'">All Tasks</button>
            <button @click="filter='favs'">Favorite Tasks</button>

        </nav>

        <div class="task-list" v-if="filter==='all'">
            <p>You have {{ taskStore.totalCount }} tasks</p>
            <div v-for="task in taskStore.tasks" :key="task.id">
                <TaskDetails :task="task"/>
            </div>
        </div>

        <div class="task-list" v-if="filter==='favs'">
            <p>You have {{ taskStore.favCount }} favorite tasks</p>
            <div v-for="task in taskStore.favs" :key="task.id">
                <TaskDetails :task="task"/>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue';
import  {useTaskStore}  from './stores/task-store'

const taskStore = useTaskStore()
const filter = ref("all")
</script>

