import { useRef } from 'react';

import Button from "../ui/button";

import styles from './events-search.module.css';

export default function EventsSearch(props) {

    const yearInputRef = useRef();
    const monthInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        props.onSearch(selectedYear, selectedMonth);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="year">Ano</label>
                    <select id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={styles.control}>
                    <label htmlFor="month">Mês</label>
                    <select id="month" ref={monthInputRef}>
                        <option value="1">Janeiro</option>
                        <option value="2">Fevereiro</option>
                        <option value="3">Março</option>
                        <option value="4">Abril</option>
                        <option value="5">Maio</option>
                        <option value="6">Junho</option>
                        <option value="7">Julho</option>
                        <option value="8">Agosto</option>
                        <option value="9">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                    </select>
                </div>
            </div>
            <Button>Buscar</Button>
        </form>
    )
}