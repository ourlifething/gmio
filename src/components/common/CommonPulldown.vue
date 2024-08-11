<template>
    <div class="dropdown-container">
      <!-- Button to toggle dropdown visibility -->
      
  
      <!-- Dropdown menu -->
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const showDropdown = ref(false);
  
  // Sample items for the dropdown menu
  const items = ref<string[]>([
    '2024/07/01',
    '2024/07/02',
    '2024/07/03',
    '2024/07/04',
    '2024/07/05',
    '2024/07/06',
    '2024/07/07',
    '2024/07/08',
    '2024/07/09',
    '2024/07/10'
  ]);
  
  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
  };
  
  const selectItem = (item: string) : void => {
    alert(`Selected date: ${item}`);
    showDropdown.value = false; // Close dropdown after selection
  };
  </script>
  
  <style scoped>
  .dropdown-container {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-button {
    font-size: 24px;
    padding: 10px;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-height: 200px; /* Adjust height as needed */
    overflow-y: auto;
    width: 150px;
    z-index: 1000;
  }
  
  .dropdown-item {
    padding: 10px;
    cursor: pointer;
  }
  
  .dropdown-item:hover {
    background-color: #f0f0f0;
  }
  </style>
  