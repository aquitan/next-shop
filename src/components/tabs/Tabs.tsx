'use client'

import { useState } from 'react';
import { TabContent } from '../tabContent/TabContent';
import styles from './Tabs.module.scss'
import classNames from 'classnames/bind'
import { TabProps } from './Tabs.props';
import { PTag } from '../pTag/PTag';
import { Ul } from '../ul/Ul';
import { HTag } from '../hTag/HTag';

export const Tabs = ({ advantages, spheres, application, packaging, description, code, expirationDate, consumption, instrumentCleaning, content, safety, attention, preparation, characteristics }: TabProps) => {
	const [activeTab, setActiveTab] = useState<string>('tab1')

	const cs = classNames.bind(styles);


	return (
		<div className={styles.tabs}>
			<ul className={styles.nav}>
				<li onClick={() => setActiveTab('tab1')} className={cs({ [styles.active]: activeTab === 'tab1' })}>Описание</li>
				{
					characteristics?.length ? <li onClick={() => setActiveTab('tab2')} className={cs({ [styles.active]: activeTab === 'tab2' })}>Характеристики</li> : null
				}
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
							<HTag tag='h2'>Области применения</HTag>
							<Ul list={spheres} />
							{preparation ? (
								<>
									<HTag tag='h2'>Подготовка поверхности</HTag>
									<Ul list={preparation} />
								</>
							) : null}
							{application ? (<>
								<HTag tag='h2'>Нанесение</HTag>
								<PTag>{application}</PTag>
							</>) : null}
							{packaging ? (
								<>
									<HTag tag='h2'>Упаковка</HTag>
									<PTag>{packaging}</PTag>
								</>
							) : null}
							{code ? (
								<>
									<HTag tag='h2'>Код по класификатору</HTag>
									<PTag>{code}</PTag>
								</>
							) : null}
							{expirationDate ? (
								<>
									<HTag tag='h2'>Срок годности</HTag>
									<PTag>{expirationDate}</PTag>
								</>
							) : null}
							{consumption ? (
								<>
									<HTag tag='h2'>Расход</HTag>
									<PTag>{consumption}</PTag>
								</>
							) : null}
							{instrumentCleaning ? (
								<>
									<HTag tag='h2'>Очистка инструмента</HTag>
									<PTag>{instrumentCleaning}</PTag>
								</>
							) : null}
							{content ? (
								<>
									<HTag tag='h2'>Состав</HTag>
									<PTag>{content}</PTag>
								</>
							) : null}
							{safety ? (
								<>
									<HTag tag='h2'>Безопасность</HTag>
									<PTag>{safety}</PTag>
								</>
							) : null}
							{attention ? (
								<>
									<HTag tag='h2'>Внимание</HTag>
									<PTag>{attention}</PTag>
								</>
							) : null}
					</TabContent>
				}
				{
					activeTab === 'tab2'
					&&
					<TabContent>

							<div className={styles.characteristics}>
								{
									characteristics?.map(char => (
										<div key={char.title} className={styles.row}>
											<div>{char.title}</div>
											<div>{char.value}</div>
										</div>
									))
								}
							</div>

					</TabContent>
				}
			</div>
		</div>
	)
}