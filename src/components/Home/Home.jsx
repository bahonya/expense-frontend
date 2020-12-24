import './Home.module.css'
import TableContent from './TableContent/TableContent.jsx'
import PlotContent from './PlotContent/PlotContent.jsx'

const Home = (props) => {
    return (
        <div className='home-wrapper'>
            <TableContent homeTableContent={props.homeTableContent}/>
            <PlotContent />
        </div>
    );
}

export default Home;