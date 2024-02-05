<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to..." v-model="task">
    <button>Add</button>

  </form>
</template>

<script setup>
import { useTaskStore } from '@/stores/task-store';
import { ref } from 'vue';

  const taskStore = useTaskStore()
  const task = ref('')
  const handleSubmit = ()=>{
    if(task.value.length > 0){
        taskStore.addTasks({
        id:Math.floor(Math.random()*1000),
        title:task.value,
        isFav:false
    });
    task.value = '';
    }
    
  }
</script>