import { PTag, PageBanner } from "@/components";
import Button from "@/components/button/Button";
import { HTag } from "@/components/hTag/HTag";
import { Input } from "@/components/input/Input";
import Section from "@/components/section/Section";
import { TextArea } from "@/components/textarea/TextArea";
import styles from './page.module.css'

const Contacts = () => {
    return (
        <>
            <div>
                <PageBanner title="Контакты" />
            </div>
            <Section>
                <div className={styles.description}>
                    <HTag tag='h2' align="center">
                        Оставайтесь на связи
                    </HTag>
                    <PTag>
                        Всегда оставайтесь с нами на связи! Если у Вас возникают какие-либо вопросы касательно нашей продукции или вы хотите сотрудничать с нами, то наши менеджеры готовы ответить на все интересующие Вас вопросы!
                    </PTag>
                </div>
                <div className={styles.contacts_wrap}>
                    <div className={styles.contacts}>
                        <div className={styles.contacts_item}>
                            <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Адрес</span>
                            <span>Липецкая область, г.Липецк, Лебедянское шоссе 3А</span>
                        </div>
                        <div className={styles.contacts_item}>
                            <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Телефон/почта</span>
                            <span>8-800-775-61-05
                                sale@elastomeric.ru
                            </span>
                        </div>
                        <div className={styles.contacts_item}>
                            <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Рабочее время</span>
                            <span>Пн - Пт 8:00 - 17:00
                                Сб - Вс Выходной</span>
                        </div>

                    </div>
                    <div style={{ maxWidth: 520, width: '100%' }}>
                        <Input type='text' placeholder='Имя' name='name' htmlFor="name" />
                        <Input type='mail' placeholder='Почта' name='mail' htmlFor="mail" />
                        <Input type='text' placeholder='Тема' name='subject' htmlFor="subject" />
                        <TextArea placeholder='Ваше сообщение' name='message' htmlFor="message" />
                        <Button type='submit'>Отправить</Button>
                    </div>

                </div>
            </Section>
        </>

    )
}

export default Contacts;