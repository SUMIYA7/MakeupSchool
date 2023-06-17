import React from 'react';
import ManageItems from './ManageItems';

const handleDelete = (id) => {

    const [job, setJob] = useState([]);
    useEffect(() => {
      fetch(`https://baiust-male.onrender.com/menu`)
        .then((res) => res.json())
        .then((data) => setJob(data));
    }, []);

  const proceed = window.confirm("Are you sure?");
  if (proceed) {
    fetch(`https://baiust-male.onrender.com/menu/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remaining = job.filter((odr) => odr._id !== id);
          setJob(remaining);
        }
      });
  }
};

//https://baiust-male.onrender.com/menuId?_id=642c155b2c4774f05c36ee81
const ClassDelete = () => {
    return (
      <div>
        {job.map((x) => (
          <ManageItems
            key={x._id}
            x={x}
            handleDelete={handleDelete}
          ></ManageItems>
        ))}
      </div>
    );
};

export default ClassDelete;