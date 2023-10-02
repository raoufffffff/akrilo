import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';
import './index.css'
import { Link } from 'react-router-dom';

const Map = ({ mark }) => {


    let icon = new Icon({
        iconRetinaUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [30, 30],
        className: "i"
    })
    let m = mark.map(e => {
        let icon = new Icon({
            iconRetinaUrl: e.images[0],
            iconSize: [38, 38],
            className: "i"
        })
        return (
            < Marker position={e.position} key={e.id} icon={icon} >
                <Popup>
                    <Link to={`${e.id}`}>{e.titel}</Link>
                </Popup>
            </Marker >
        )
    })
    return (
        <div className='mapp'>

            <MapContainer
                center={[34.524661, 4.042969]}
                zoom={6.5}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {m}
            </MapContainer >
        </div>
    )
}

export default Map