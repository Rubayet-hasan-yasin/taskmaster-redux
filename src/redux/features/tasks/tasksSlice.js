import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [
        {
            id: 1,
            status: 'pending',
            title: 'Remove Button',
            description:
                'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
            date: '2023-08-28',
            assignedTo: 'Mir Hussain',
            priority: 'high',
        }
    ],
    userSpecificTasks: [],
}


const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: state.tasks.length + 1,
                status: "pending",
                ...action.payload
            })
        },

        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        updateStatus: (state, action) => {
            const target = state.tasks.find(item => item.id === action.payload.id);
            target.status = action.payload.status;

        },
        userTasks: (state, action) => {
            state.userSpecificTasks = state.tasks.filter(item => item.assignedTo === action.payload)
        }
    }
})

export const { addTask, updateStatus, removeTask, userTasks } = tasksSlice.actions;

export default tasksSlice.reducer;