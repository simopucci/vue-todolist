const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: "To Do List",

            newTasks: {
                    text: '',
                    done: false,
                },

            tasks: [
                {
                    text: 'Task',
                    done: true,
                },
                {
                    text: 'Task',
                    done: true,
                },
                {
                    text: 'Task',
                    done: false,
                },
                {
                    text: 'Task',
                    done: false,
                },
                {
                    text: 'Task',
                    done: true,
                },
            ],
        };
    },

    methods: {
        saveNewTask() {
            const copiedNewTask = { ...this.newTasks };

            if(copiedNewTask.text.length < 4) {
                alert('Devi inserire almeno 4 lettere');
                return;
            }

            this.tasks.push(copiedNewTask);
            this.newTasks.text = '';
        },

        deleteTask(i) {
            this.tasks.splice(i, 1);
        },

        setDoneToDo(task) {
            task.done = !task.done;
        },
    },



});

app.mount('#app');