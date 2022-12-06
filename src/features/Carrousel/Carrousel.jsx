import {Card, Spinner} from "features"
import './Carrousel.css'

export const Carrousel = ({data, isLoading}) => {
  return (<>
    <div className="carrousel">
    {!isLoading ?
    (data.map((data_element) => {return <Card element={data_element} key={data_element.id} />})) :
    <Spinner />}
    </div>
    </>)
}