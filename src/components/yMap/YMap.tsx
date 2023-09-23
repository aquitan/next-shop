'use client'

import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import styles from './YMap.module.scss'

const YMap = () => {
	return (
		<div style={{ width: '100%' }}>
			<YMaps>
				<div className={styles.map} >
					<Map width={'100%'} height={'400px'} defaultState={{ center: [52.624742, 39.537829], zoom: 17 }}>
						<Placemark geometry={[52.624742, 39.537829]} />
						<ZoomControl options={{ position: { right: '20px', top: '20px' } }} />
					</Map>
				</div>
			</YMaps>
		</div>
	)
}

export default YMap;