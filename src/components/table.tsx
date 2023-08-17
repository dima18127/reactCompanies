import { ICompany } from '../models'
import { dateUpdated } from '../utils/dateUpdated';
import { DropResult, Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import { setDataCompany } from '../store/industrySlice';
import {  useAppDispatch } from '../hooks'


interface IProps  {
    dataCompany :  ICompany[],
    startIndex : number,
    endIndex : number,
}
 const table = ({dataCompany,startIndex,endIndex}:IProps) => {
    const dispatch = useAppDispatch();
    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
          return;
        }
        const reorderedItems = Array.from(dataCompany);
        const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, reorderedItem);
        dispatch(setDataCompany(reorderedItems));
      };



  return (
<table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Company name</th>
              <th>exchange</th>
              <th>industry</th>
              <th>phone</th>
              <th>sector</th>
              <th>updated</th>
            </tr>
          </thead>
          <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" isCombineEnabled>
          {(provided) => (<tbody {...provided.droppableProps} ref={provided.innerRef} >
            {dataCompany
              .slice(startIndex, endIndex)
              .map((company: ICompany, index: number) => (
                  
                <Draggable key={company.companyName} draggableId={company.companyName} index={index}>
                    {(provided) => (
                  <tr
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                        <td>{startIndex + index + 1}</td>
                        <td>{company.companyName}</td>
                        <td>{company.exchange}</td>
                        <td>{company.industry || "no info"}</td>
                        <td>{company.phone || "no phone"}</td>
                        <td>{company.sector || "no info"}</td>
                        <td>{dateUpdated(company.updated)}</td>
                </tr>)}
                </Draggable>
              ))}
          </tbody>
          )}
          </Droppable>
          </DragDropContext>
        </table>
  )
}


export default table
