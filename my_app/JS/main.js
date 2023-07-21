const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {

      if (!this.newTask.trim()) {
        return;
      }

      const newTask = {
        goal: this.newTask.trim(),
        status: "todo",
      };

      this.tasks.push(newTask);

      this.newTask = "";
    },
    
    toggleTaskStatus(task) {
        task.status = task.status === 'todo' ? 'done' : 'todo';
    },
  },
  mounted() {
    
    axios.get('http://localhost/php-todo-list-json/api/index.php')
      .then(res => {
        this.tasks = res.data;
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  },
});

app.mount('#app');