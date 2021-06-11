import React, { useEffect } from "react";
import { DivSearch } from '../../GlobalStyle'
import Button from '../Button/Button'
import {useForm} from '../../hooks/useForm'
const Search = ({setQuery, query, update}) => {

    const formInitial = {
        room: true,
        studio: true,
        apartment: true,
        date: '',
        noData: true
    }
    useEffect(() =>{
        console.log(query)
        update();

    }, [query])

    const [form, onChange, resetForm] = useForm(formInitial);
    const submit = (e) => {
        e.preventDefault();
        let newQuery = "";
        newQuery += form.room ? "#room=on#":''
        newQuery += form.studio ?"#studio=on#":''
        newQuery += form.apartment ?"#apartment=on#":''
        newQuery += form.noData ?"#noData=on#":''

        newQuery += form.date ?`#date=${form.date}#`:''
        newQuery= newQuery.replace(/##/gi, "&");
        newQuery= newQuery.replace(/#/gi, "");

        setQuery(newQuery)
    }
    return (
        <DivSearch>
            <form onSubmit={submit}> 
                <h4>Topic</h4>
                <div className="checkbox">
                <label>
                    <input type="checkbox" name={'room'} onChange={onChange} 
                    checked={form['room']} />
                    Room
                </label>
                <label>
                    <input type="checkbox"name={'studio'} onChange={onChange}
                      checked={form['studio']}  />
                    Studio
                </label>
                <label>
                    <input type="checkbox" name={'apartment'} onChange={onChange}
                      checked={form['apartment']}/>
                    Apartment
                </label>
                </div>
                <h4>Date</h4> <label>
                    <input type="checkbox" name={'noData'} onChange={onChange}
                      checked={form['noData']}/>
                    Do not filter by date
                </label>
                <input type="date" name={'date'} onChange={onChange} 
                value={form.noData?'':form['date']} disabled={form.noData} />
                <Button type="submit">
                    Filter
                </Button>
            </form>
        </DivSearch>
    )
};

export default Search;
