import { useState ,useContext} from 'react';
import { createThemeContext } from './TaskPage';
export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  const theme = useContext(createThemeContext);
  
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        onAddTask(text);
        setText('');
      }}>Add {theme.theme}</button>
    </>
  )
}
