import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {store} from './store/index.ts'
import { Provider } from 'react-redux'
// import { DragDropContext,DropResult  } from 'react-beautiful-dnd';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        {/* <DragDropContext>  */}
            <App />
        {/* </DragDropContext>  */}
    </Provider>
)
