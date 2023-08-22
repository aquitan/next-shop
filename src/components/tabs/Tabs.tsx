'use client'

import { useState } from 'react';
import { TabContent } from '../tabContent/TabContent';
import styles from './Tabs.module.scss'
import classNames from 'classnames/bind'
import { TabProps } from './Tabs.props';
import { PTag } from '../pTag/PTag';
import { Ul } from '../ul/Ul';
import { HTag } from '../hTag/HTag';

export const Tabs = ({ advantages, spheres, application, pPackage, description, code, expirationDate, consumption, instrumentCleaning, content, safety, attention }: TabProps) => {
	const [activeTab, setActiveTab] = useState<string>('tab1')

	const cs = classNames.bind(styles);


	return (
		<div className={styles.tabs}>
			<ul className={styles.nav}>
				<li onClick={() => setActiveTab('tab1')} className={cs({ [styles.active]: activeTab === 'tab1' })}>Описание</li>
				<li onClick={() => setActiveTab('tab2')} className={cs({ [styles.active]: activeTab === 'tab2' })}>Характеристики</li>
			</ul>

			<div>
				{
					activeTab === 'tab1'
					&&
					<TabContent>
						{
							description?.map((p, index) => (
								<PTag size='m' key={index}>{p}</PTag>
							))
						}
						<HTag tag='h2'>Преимущества</HTag>
						<Ul list={advantages} />
					</TabContent>
				}
				{
					activeTab === 'tab2'
					&&
					<TabContent>

					</TabContent>
				}


			</div>
		</div>
	)
}