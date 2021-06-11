import React, { useEffect } from "react";
import { DivSearch } from '../../GlobalStyle'
import Button from '../Button/Button'
import { useForm } from '../../hooks/useForm'
const Search = ({ setQuery, query, update, topics}) => {


    const formInitial = {
        date: '',
        order: ''
    }
    topics.forEach(element => {
        formInitial[element] = true;
    });
    useEffect(() => {
        console.log(query)
        update();

    }, [query])

    const [form, onChange, resetForm] = useForm(formInitial);

    const submit = (e) => {
        e.preventDefault();
        let newQuery = "";

        topics.forEach(i => {
            newQuery += form[i]? `#${i}=on#`:``;
        });
        newQuery += form.noData ?"#noData=on#":''
        newQuery += form.date ?`#date=${form.date}#`:''
        newQuery += form.order ?`#order=${form.order}#`:''
        newQuery = newQuery.replace(/##/gi, "&");
        newQuery = newQuery.replace(/#/gi, "");

        setQuery(newQuery)
    }
    return (
        <DivSearch>
            <form onSubmit={submit}>
                <h4>Topic</h4>
                <div className="checkbox">
                    {
                        topics.map((i) => {
                            return (
                                <label>
                                    <input type="checkbox" name={i} onChange={onChange}
                                        checked={form[i]} />
                                    {i.replace(/_/gi, " ")}
                                </label>
                            )
                        })
                    }


                </div>

                <label>
                    <h4>Date</h4>
                    <input type="checkbox" name={'noData'} onChange={onChange}
                        checked={form['noData']} />
                    Do not filter by date
                </label>
                <input type="date" name={'date'} onChange={onChange} 
                value={form.noData?'':form['date']} disabled={form.noData} />

                <div className="checkbox">
                    <h4>Order</h4>
                    <label>
                        <input type="radio" name={'order'} onChange={onChange}
                            checked={form['order'] === 'liked'} value="liked" 
                            onClick={() => resetForm({...form, order: ''})}/>
                    Most Liked
                </label>
                    <label>
                        <input type="radio" name={'order'} onChange={onChange}
                            checked={form['order'] === 'disLiked'} value="disLiked" 
                           onClick={() => resetForm({...form, order: ''})} />
                    Most DisLiked
                </label>
                </div>
                <Button type="submit">
                    Filter
                </Button>
            </form>
        </DivSearch>
    )
};

export default Search;
