import api from "./Api";

//////////////// Get Query ////////////////
const _onGet = () => api.get(`/todo`).then(res => res.data);

//////////////// Post Query ////////////////
const _onPost = e => {
  e.preventDefault();
  const todo = {
    name: e.target.elements.name.value,
    age: Number(e.target.elements.age.value)
  };
  api.post("/todo", todo).then(res => res.data);
};

//////////////// Delete Query ////////////////
const _onDelete = id => {
  api.delete(`/todo/${id}`).then(() => {
    api.get("/todo").then(res => res.data);
  });
};

//////////////// Edit/Update Query ////////////////
const _onEdit = (key, id) => {
  // api.put(`/todo/${id}`).then(res => console.log("edit item", res.data));
};

export { _onGet, _onPost, _onDelete, _onEdit };
