import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';
const VilaMap = (props) => {
    const icon = new Icon({
        iconRetinaUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [38, 38]
    })
    return (
        <MapContainer
            center={props.position}
            zoom={14}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.position} icon={icon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default VilaMap