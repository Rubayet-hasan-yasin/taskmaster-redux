import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const TasksDetailsModal = ({ isOpen, setIsOpen, id }) => {
    const { userSpecificTasks } = useSelector(state => state.tasksSlice);


    const task = userSpecificTasks.find(item => item.id == id);

    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task.title}>

                <div>
                    <p className="mb-3">{task?.description}</p>
                    <p className="text-sm">Assigned to - {task?.assignedTo}</p>

                    <p>{task?.date}</p>


                </div>

            </Modal>
        </div>
    );
};

export default TasksDetailsModal;