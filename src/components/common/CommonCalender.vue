<template>
    <div class="calendar-container">
      <!-- Current Date Display with Icon and Navigation Arrows -->
      <div class="date-navigation">
        <button @click="prevMonth">←</button>
        <span>{{ formattedCurrentDate }}</span>
        <button @click="toggleCalendar">📅</button>
        <button @click="nextMonth">→</button>
      </div>
  
      <!-- Monthly Calendar Display -->
      <div v-if="showCalendar" class="calendar">

        <div class="calendar-days">
          <div class="day-name" v-for="day in dayNames" :key="day">{{ day }}</div>
          <div
            v-for="day in calendarDays"
            :key="day.date.toISOString()"
            :class="{ 'calendar-day': true, selected: isSelected(day.date), today: isToday(day.date) }"
            @click="selectDay(day.date)"
          >
            {{ day.displayDate }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  // Initialize the current date
  const today = new Date();
  const currentDate = ref(new Date());
  const showCalendar = ref(false);
  const selectedDates = ref<Date[]>([]);
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Computed property for the formatted current date
  const formattedCurrentDate = computed(() => {
    const year = currentDate.value.getFullYear();
    const month = String(currentDate.value.getMonth() + 1).padStart(2, '0');
    const date = String(currentDate.value.getDate()).padStart(2, '0');
    const weekday = dayNames[currentDate.value.getDay()];
  
    return `${year}/${month}/${date} (${weekday})`;
  });
  
  // Computed property for the formatted current month
  const formattedCurrentMonth = computed(() => {
    const year = currentDate.value.getFullYear();
    const month = String(currentDate.value.getMonth() + 1).padStart(2, '0');
    return `${year}/${month}`;
  });
  
  // Computed property for calendar days
  const calendarDays = computed(() => {
    const startOfMonth = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1);
    const endOfMonth = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0);
    
    const startDay = startOfMonth.getDay();
    const startDate = new Date(startOfMonth);
    startDate.setDate(startDate.getDate() - startDay);
    const endDate = new Date(endOfMonth);
    endDate.setDate(endDate.getDate() + (6 - endOfMonth.getDay()));
  
    const days = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      days.push({ 
        date: new Date(d), 
        displayDate: d.getMonth() === currentDate.value.getMonth() ? d.getDate() : ''
      });
    }
    return days;
  });
  
  // Method to select a day
  const selectDay = (date: Date) => {
    selectedDates.value = [date]; // Only select one day at a time
  };
  
  // Check if a date is selected
  const isSelected = (date: Date) => {
    return selectedDates.value.some(d => d.getTime() === date.getTime());
  };
  
  // Check if a date is today
  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };
  
  // Toggle calendar visibility
  const toggleCalendar = () => {
    showCalendar.value = !showCalendar.value;
  };
  
  // Navigate to previous month
  const prevMonth = () => {
    const newDate = new Date(currentDate.value);
    newDate.setMonth(newDate.getMonth() - 1);
    currentDate.value = newDate;
  };
  
  // Navigate to next month
  const nextMonth = () => {
    const newDate = new Date(currentDate.value);
    newDate.setMonth(newDate.getMonth() + 1);
    currentDate.value = newDate;
  };
  </script>
  
  <style scoped>
  .calendar-container {
    text-align: center;
  }
  
  .date-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .date-navigation button {
    font-size: 24px;
    margin: 0 10px;
  }
  
  .calendar {
    display: inline-block;
    text-align: left;
    margin-top: 10px;
  }
  

  
  .calendar-days {
    background:#eee;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    z-index: 1000;
  }
  
  .day-name {
    font-weight: bold;
    padding: 5px;
    text-align: center;
  }
  
  .calendar-day {
    padding: 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .calendar-day:hover {
    background-color: #eee;
  }
  
  .selected {
    background-color: #007bff;
    color: white;
  }
  
  .today {
    background-color: #ff0000; /* Red background for today */
    color: white;
  }
  </style>
  