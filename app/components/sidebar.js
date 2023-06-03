
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='overflow-hidden col-lg-2'>
            <div className='card border-0'>
                <div className='card-header border-0 font-sm font-w-md'>
                    Getting Started
                </div>
                <ul className='list-group list-group-flush'>
                    <li className="list-group-item border-0 font-sm">
                        <a className='grey-600 pointer' href='/dashboard/home'>Instalation</a>
                    </li>
                    <li className="list-group-item border-0 font-sm">
                        <a className='grey-600 pointer'>A second item</a>
                    </li>
                    <li className="list-group-item border-0 font-sm">
                        <a className='grey-600 pointer'>A third item</a>
                    </li>
                </ul>
                <div className='divider-1'></div>
                <div className='card-header border-0 font-sm font-w-md'>
                    Getting Started
                </div>
                <ul className='list-group list-group-flush'>
                    <li className="list-group-item border-0 font-sm">
                        <a className='grey-600 pointer'>Instalation</a>
                    </li>
                    <li className="list-group-item border-0 font-sm">
                        <a className='grey-600 pointer'>A second item</a>
                    </li>
                    <li className="list-group-item border-0 font-sm">
                        <a className='grey-600 pointer'>A third item</a>
                    </li>
                </ul>
                <div className='divider-1'></div>
            </div>
        </div>

    );
}