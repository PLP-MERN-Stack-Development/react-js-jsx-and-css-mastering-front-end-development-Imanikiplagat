import { useState, useMemo, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card';

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');

  function addTask(e){
    e.preventDefault();
    if(!text.trim()) return;
    setTasks(prev => [{ id: Date.now(), text: text.trim(), done:false }, ...prev]);
    setText('');
  }
  function toggleDone(id) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }
  function removeTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  const filtered = useMemo(() => {
    if(filter === 'active') return tasks.filter(t => !t.done);
    if(filter === 'completed') return tasks.filter(t => t.done);
    return tasks;
  }, [tasks, filter]);

  return (
    <Card title="Task Manager">
      <form onSubmit={addTask} className="mb-4 flex gap-2">
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="New task"
          className="flex-1 border px-3 py-2 rounded"/>
        <Button type="submit">Add</Button>
      </form>

      <div className="flex gap-2 mb-4">
        <Button variant={filter==='all'?'primary':'secondary'} onClick={()=>setFilter('all')}>All</Button>
        <Button variant={filter==='active'?'primary':'secondary'} onClick={()=>setFilter('active')}>Active</Button>
        <Button variant={filter==='completed'?'primary':'secondary'} onClick={()=>setFilter('completed')}>Completed</Button>
      </div>

      <ul className="space-y-2">
        {filtered.map(t => (
          <li key={t.id} className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={t.done} onChange={()=>toggleDone(t.id)}/>
              <span className={t.done ? 'line-through text-gray-500' : ''}>{t.text}</span>
            </div>
            <div className="flex gap-2">
              <Button variant="danger" onClick={()=>removeTask(t.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
