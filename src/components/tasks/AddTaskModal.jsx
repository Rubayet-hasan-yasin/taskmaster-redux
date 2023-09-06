import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';

const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const { handleSubmit, register, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)

        onCancel()
    }

    const onCancel = ()=>{
        reset();
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Add Task"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-3 flex-col'>
                    <label htmlFor="title" className='mb-2'>Title</label>
                    <input
                    className='w-full rounded-md'
                        type="text"
                        id='title'
                        {...register('name')}

                    />

                </div>

                <div className='flex flex-col mb-5'>
                    <label htmlFor="title" className='mb-2'>Description</label>
                    <textarea 
                    className='w-full rounded-md'
                    type="text"
                    id='description'
                    {...register('description')}
                    ></textarea>

                </div>
                <div className='flex flex-col mb-5'>
                    <label htmlFor="title" className='mb-2'>Deadline</label>
                    < input
                    className='w-full rounded-md'
                    type="date"
                    id='date'
                    {...register('date')}
                    />

                </div>

                <div className='flex flex-col mb-5'>
                    <label htmlFor="title" className='mb-2'>Assign to</label>
                    <select
                    className='w-full rounded-md' id="assignTo"
                    {...register('assignedTo')}
                    >
                        <option value="Mir Hussain">Mir Hussain</option>
                        <option value="Mezbe Abedin">Mezbe Abedin</option>
                        <option value="Nahid Hasan">Nahid Hasan</option>
                        <option value="Mizaur Rahman">Mizaur Rahman</option>
                        <option value="Tonmoy Parvaze">Tonmoy Parvaze</option>
                        <option value="Fahim Ahmed Firoz">Fahim Ahmed Firoz</option>
                        <option value="Rahatul Islam">Rahatul Islam</option>
                        <option value="Samin Israr Ravi">Samin Israr Ravi</option>
                        <option value="Mehedi Anik">Mehedi Anik</option>
                        <option value="Ehtisam Haq">Ehtisam Haq</option>
                        <option value="Anisur Rahman">Anisur Rahman</option>
                        <option value="Muktadir Hasan">Muktadir Hasan</option>
                        <option value="Masud Alam">Masud Alam</option>
                    </select>

                </div>

                

                <div className='flex flex-col mb-5'>
                    <label htmlFor="title" className='mb-2'>Priority</label>
                    
                    <select
                    className='w-full rounded-md'
                     id="priority"
                     {...register('priority')}
                     >
                        <option defaultValue value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                     </select>

                </div>


                <div className='flex gap-3 justify-end'>
                <button
                onClick={onCancel}
                type='button' 
                className='btn btn-danger'
                >Cancel</button>

                <button type='submit' className='btn btn-primary'>Submit</button>
                </div>

            </form>


        </Modal>

    );
};

export default AddTaskModal;